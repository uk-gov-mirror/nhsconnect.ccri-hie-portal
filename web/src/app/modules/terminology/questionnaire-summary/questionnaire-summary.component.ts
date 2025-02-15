import { Component, OnInit } from '@angular/core';
import {FhirService} from '../../../service/fhir.service';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {ResourceDialogComponent} from '../../../dialog/resource-dialog/resource-dialog.component';
import {QuestionnaireDataSource} from '../../../data-source/questionnaire-data-source';

@Component({
  selector: 'app-questionnaire-summary',
  templateUrl: './questionnaire-summary.component.html',
  styleUrls: ['./questionnaire-summary.component.css']
})
export class QuestionnaireSummaryComponent implements OnInit {

  questionnaires: fhir.Questionnaire[] = [];

  dataSource: QuestionnaireDataSource;

  displayedColumns = ['select', 'name', 'description', 'status', 'resource'];


  constructor(private fhirService: FhirService,
              public dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.fhirService.get('/Questionnaire?_count=20').subscribe(
      result => {
        const bundle = <fhir.Bundle> result;
        for (const entry of bundle.entry) {
          if (entry.resource.resourceType === 'Questionnaire') {
            this.questionnaires.push(<fhir.Questionnaire> entry.resource);
          }
        }
        this.dataSource = new QuestionnaireDataSource(this.fhirService,  this.questionnaires);
      }
    );
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

  selectQuestionnaire(questionnaire: fhir.Questionnaire) {

      this.router.navigate([ questionnaire.id ], {relativeTo: this.route});
  }

}
