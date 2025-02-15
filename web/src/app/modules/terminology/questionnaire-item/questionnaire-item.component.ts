import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {ResourceDialogComponent} from '../../../dialog/resource-dialog/resource-dialog.component';

@Component({
  selector: 'app-questionnaire-item',
  templateUrl: './questionnaire-item.component.html',
  styleUrls: ['./questionnaire-item.component.css']
})
export class QuestionnaireItemComponent implements OnInit {

  @Input()
  item: any;

  @Input()
  depth;

  disabled = false;

  constructor(
    public dialog: MatDialog,
    private _sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getIcon(item) {
    switch (item.type) {
      case 'group':
        return 'group';
      case 'reference':
        return 'book';
      case 'choice':
        return 'question_answer';
      case 'string':
        return 'input';
      case 'dateTime': return 'event';
    }
    return 'group';
  }
  getStyle(item) {
    return this._sanitizer.bypassSecurityTrustStyle('{background-color: accent;}');
  }
  getProfile(extension: fhir.Extension[]): string {
     for ( const ext of extension) {
       if (ext.url === 'http://hl7.org/fhir/StructureDefinition/questionnaire-allowedProfile') {
         return ext.valueReference.reference;
       }
     }
     return '';
  }

  remove(str: String) {
    if (str === undefined) {
      return '';
    }

    return str.replace('http://hl7.org/fhir/StructureDefinition/questionnaire-', '');
  }
  select(resource) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      resource: resource
    };
    const resourceDialog: MatDialogRef<ResourceDialogComponent> = this.dialog.open( ResourceDialogComponent, dialogConfig);
  }



}
