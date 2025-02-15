import { Component, OnInit } from '@angular/core';
import {FhirService} from '../../../service/fhir.service';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {ResourceDialogComponent} from '../../../dialog/resource-dialog/resource-dialog.component';
import {NamingSystemDataSource} from '../../../data-source/naming-system-data-source';

@Component({
  selector: 'app-naming-system',
  templateUrl: './naming-system.component.html',
  styleUrls: ['./naming-system.component.css']
})
export class NamingSystemComponent implements OnInit {

  namingSystems: fhir.NamingSystem[];

  searchInputName;

  // searchInputPublisher;

  searchInputUrl;

  dataSource: NamingSystemDataSource;

  displayedColumns = ['view', 'name', 'kind', 'publisher', 'type', 'status', 'resource'];

  constructor(private fhirService: FhirService,
              public dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  search(name, uri) {
    //console.log(event);
    if (name !== undefined) {
      this.searchInputName = name;
    }
    if (uri !== undefined) {
      this.searchInputUrl = uri;
    }

    let url = '/NamingSystem';

    if (this.searchInputName !== undefined) {
      url = url + '?name='+ this.searchInputName;
    }
    if (this.searchInputUrl !== undefined) {
      if (this.searchInputName === undefined) {
        url = url + '?value='+ this.searchInputUrl;
      } else {
        url = url + '&value='+ this.searchInputUrl;
      }
    }
    url = url + '&_count=20';

    this.namingSystems = [];

    this.fhirService.get(url).subscribe(
      result => {
        const bundle = <fhir.Bundle> result;
        if (bundle.entry !== undefined) {
          for (const entry of bundle.entry) {
            if (entry.resource.resourceType === 'NamingSystem') {
              this.namingSystems.push(<fhir.NamingSystem>entry.resource);
            }
          }
        }
        this.dataSource = new NamingSystemDataSource(this.fhirService,  this.namingSystems);
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

  view(namingSystem: fhir.NamingSystem) {
    this.router.navigate([namingSystem.id], {relativeTo: this.route });
  }

}
