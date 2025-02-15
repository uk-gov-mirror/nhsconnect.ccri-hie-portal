import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, ErrorHandler, NgModule} from '@angular/core';
import 'hammerjs';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CovalentHttpModule} from '@covalent/http';
import {CovalentHighlightModule} from '@covalent/highlight';
import {CovalentMarkdownModule} from '@covalent/markdown';
import {CovalentDynamicFormsModule} from '@covalent/dynamic-forms';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErrorsHandler} from './error-handler';
import {MessageService} from './service/message.service';
import {DocumentReferenceComponent} from './component/document-reference/document-reference.component';
import {MedicationComponent} from './component/medication/medication.component';
import {MedicationRequestComponent} from './component/medication-request/medication-request.component';
import {AllergyIntoleranceComponent} from './component/allergy-intolerance/allergy-intolerance.component';
import {ProcedureComponent} from './component/procedure/procedure.component';
import {ConditionComponent} from './component/condition/condition.component';
import {MedicationStatementComponent} from './component/medication-statement/medication-statement.component';
import {EncounterComponent} from './component/encounter/encounter.component';
import {ObservationComponent} from './component/observation/observation.component';
import {ImmunisationDetailComponent} from './dialog/immunisation-detail/immunisation-detail.component';
import {ImmunisationComponent} from './component/immunisation/immunisation.component';

import {ResourceDialogComponent} from './dialog/resource-dialog/resource-dialog.component';
import {OrganisationComponent} from './component/organisation/organisation.component';
import {PractitionerComponent} from './component/practitioner/practitioner.component';
import {MedicationDispenseComponent} from './component/medication-dispense/medication-dispense.component';
import {CarePlanComponent} from './component/care-plan/care-plan.component';
import {ConsentComponent} from './component/consent/consent.component';
import {ClinicalImpressionComponent} from './component/clinical-impression/clinical-impression.component';
import {GoalComponent} from './component/goal/goal.component';
import {RiskAssessmentComponent} from './component/risk-assessment/risk-assessment.component';
import {QuestionnaireResponseComponent} from './component/questionnaire-response/questionnaire-response.component';
import {EncounterDialogComponent} from './dialog/encounter-dialog/encounter-dialog.component';
import {PractitionerRoleDialogComponent} from './dialog/practitioner-role-dialog/practitioner-role-dialog.component';
import {HealthcareServiceComponent} from './component/healthcare-service/healthcare-service.component';
import {PractitionerRoleComponent} from './component/practitioner-role/practitioner-role.component';
import {LocationComponent} from './component/location/location.component';
import {OrganisationDialogComponent} from './dialog/organisation-dialog/organisation-dialog.component';
import {PractitionerDialogComponent} from './dialog/practitioner-dialog/practitioner-dialog.component';
import {LocationDialogComponent} from './dialog/location-dialog/location-dialog.component';
import {IssueDialogComponent} from './dialog/issue-dialog/issue-dialog.component';
import {MedicationDialogComponent} from './dialog/medication-dialog/medication-dialog.component';
import {PatientComponent} from './component/patient/patient.component';
import {MedicationDispenseDetailComponent} from './dialog/medication-dispense-detail/medication-dispense-detail.component';
import {LinksService} from './service/links.service';
import {EprService} from './service/epr.service';
import {ResponseInterceptor} from './service/response-interceptor';
import { ObservationChartDialogComponent } from './dialog/observation-chart-dialog/observation-chart-dialog.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BinaryComponent} from './component/binary/binary/binary.component';
import {PdfViewerComponent} from './component/binary/pdf-viewer/pdf-viewer.component';
import {ImgViewerComponent} from './component/binary/img-viewer/img-viewer.component';
import {ViewDocumentComponent} from './component/binary/composition-view/view-document.component';
import {ViewDocumentSectionComponent} from './component/binary/composition-view-section/view-document-section.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {ImageViewerModule} from '@hallysonh/ngx-imageviewer';
import { EdEncounterListComponent } from './modules/hie/ed-encounter-list/ed-encounter-list.component';
import {HieRoutingModule} from './modules/hie-routing.module';
import { EdEncounterCardComponent } from './modules/hie/ed-encounter-card/ed-encounter-card.component';
import { PatientMainComponent } from './modules/patient/patient-main/patient-main.component';
import { PatientFindComponent } from './modules/hie/patient-find/patient-find.component';
import {PatientSearchComponent} from './component/patient-search/patient-search.component';
import { PatientSummaryComponent } from './modules/patient/patient-summary/patient-summary.component';
import { PatientVitalSignsComponent } from './modules/patient/patient-vital-signs/patient-vital-signs.component';
import { PatientEncountersComponent } from './modules/patient/patient-encounters/patient-encounters.component';
import { PatientDocumentsComponent } from './modules/patient/patient-documents/patient-documents.component';
import { PatientEncounterDetailComponent } from './modules/patient/patient-encounter-detail/patient-encounter-detail.component';
import { PatientProcedureComponent } from './modules/patient/patient-procedure/patient-procedure.component';
import {CompositionDetailComponent} from './component/composition-detail/composition-detail.component';
import {CompositionComponent} from './component/composition/composition.component';
import { PatientImmunisationComponent } from './modules/patient/patient-immunisation/patient-immunisation.component';
import { PatientMedicationComponent } from './modules/patient/patient-medication/patient-medication.component';
import {AuthGuard} from './service/auth-guard';
import {AuthService} from './service/auth.service';
import {Oauth2Service} from './service/oauth2.service';
import {CookieModule, CookieService} from 'ngx-cookie';
import {LoginComponent} from './security/login/login.component';
import {CallbackComponent} from './security/callback/callback.component';
import {PingComponent} from './security/ping/ping.component';
import {LogoutComponent} from './security/logout/logout.component';
import {SmartAppsComponent} from './modules/hie/smart-apps/smart-apps.component';
import {RegisterSmartComponent} from './dialog/register-smart/register-smart.component';
import {RegisterSmartSecretComponent} from './dialog/register-smart-secret/register-smart-secret.component';
import {AuthGuardOauth2} from './service/auth-guard-oauth2';
import {HieMainComponent} from './modules/hie/hie-main/hie-main.component';
import {OAuthModule} from 'angular-oauth2-oidc';
import { PatientCarePlanComponent } from './modules/patient/patient-care-plan/patient-care-plan.component';
import { FlagComponent } from './component/flag/flag.component';
import { ReferralRequestComponent } from './component/referral-request/referral-request.component';
import { PatientReferralRequestComponent } from './modules/patient/patient-referral-request/patient-referral-request.component';
import { MedicationAdministrationComponent } from './component/medication-administration/medication-administration.component';
import { CareTeamComponent } from './component/care-team/care-team.component';
import { QuestionnaireResponseItemComponent } from './component/questionnaire-response-item/questionnaire-response-item.component';
import { HtmlViewerComponent } from './component/binary/html-viewer/html-viewer.component';
import {AppConfigService} from './service/app-config.service';
import {LoadingComponent} from './security/loading/loading.component';
import { DirectoryMainComponent } from './modules/hpd/directory-main/directory-main.component';
import { TerminologyMainComponent } from './modules/terminology/terminology-main/terminology-main.component';
import {DirectoryRoutingModule} from './modules/directory-routing.module';
import { ValueSetsComponent } from './modules/terminology/value-sets/value-sets.component';
import { ConceptMapsComponent } from './modules/terminology/concept-maps/concept-maps.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { QuestionnaireComponent } from './modules/terminology/questionnaire/questionnaire.component';
import { QuestionnaireItemComponent } from './modules/terminology/questionnaire-item/questionnaire-item.component';
import { EOLCIntroComponent } from './modules/terminology/eolcintro/eolcintro.component';
import { PatientEOLCComponent } from './modules/patient/patient-eolc/patient-eolc.component';
import { PatientEOLCItemComponent } from './modules/patient/patient-eolcitem/patient-eolcitem.component';
import {QuestionnaireResponseItemAnswerComponent} from './component/questionnaire-response-item-answer/questionnaire-response-item-answer.component';
import { CarePlanActivityComponent } from './component/care-plan-activity/care-plan-activity.component';
import { ListComponent } from './component/list/list.component';
import { RelatedPersonComponent } from './component/related-person/related-person.component';
import { ValueSetDetailComponent } from './modules/terminology/value-set-detail/value-set-detail.component';
import { QuestionnaireSummaryComponent } from './modules/terminology/questionnaire-summary/questionnaire-summary.component';
import { CodeSystemComponent } from './modules/terminology/code-system/code-system.component';
import { CodeSystemDetailComponent } from './modules/terminology/code-system-detail/code-system-detail.component';
import { NamingSystemComponent } from './modules/terminology/naming-system/naming-system.component';
import { NamingSystemDetailComponent } from './modules/terminology/naming-system-detail/naming-system-detail.component';
import { ConceptMapDetailComponent } from './modules/terminology/concept-map-detail/concept-map-detail.component';
import { MessageDefinitionComponent } from './modules/terminology/message-definition/message-definition.component';
import { MessageDefinitionDetailComponent } from './modules/terminology/message-definition-detail/message-definition-detail.component';
import { GraphDefinitionComponent } from './modules/terminology/graph-definition/graph-definition.component';
import { GraphDefinitionDetailComponent } from './modules/terminology/graph-definition-detail/graph-definition-detail.component';
import { GraphDefinitionLinkComponent } from './modules/terminology/graph-definition-link/graph-definition-link.component';
import {CovalentCommonModule} from '@covalent/core/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CovalentLayoutModule} from '@covalent/core/layout';
import {CovalentMediaModule} from '@covalent/core/media';
import {CovalentStepsModule} from '@covalent/core/steps';
import {CovalentMessageModule} from '@covalent/core/message';
import {CovalentJsonFormatterModule} from '@covalent/core/json-formatter';
import {CovalentDialogsModule} from '@covalent/core/dialogs';
import {CovalentExpansionPanelModule} from '@covalent/core/expansion-panel';
import {CovalentChipsModule} from '@covalent/core/chips';
import {CovalentNotificationsModule} from '@covalent/core/notifications';
import {CovalentMenuModule} from '@covalent/core/menu';
import {CovalentDataTableModule} from '@covalent/core/data-table';
import {CovalentSearchModule} from '@covalent/core/search';
import { CovalentLoadingModule } from '@covalent/core/loading';



const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.loadConfig();
  };
};


@NgModule({
  declarations: [
    AppComponent,
      LoginComponent,
    CallbackComponent,
    PingComponent,
    LoadingComponent,
    LogoutComponent,
    SmartAppsComponent,

    AllergyIntoleranceComponent,
      BinaryComponent,
      PdfViewerComponent,
      ImgViewerComponent,
      ViewDocumentComponent,
      ViewDocumentSectionComponent,

    ClinicalImpressionComponent,
    ConsentComponent,
    CarePlanComponent,
    ConditionComponent,
    CompositionComponent,
    CompositionDetailComponent,
    DocumentReferenceComponent,
    EncounterComponent,
    FlagComponent,
    GoalComponent,
    ImmunisationComponent,
    ImmunisationDetailComponent,
    LocationComponent,
    MedicationDispenseComponent,
    MedicationDispenseDetailComponent,
    MedicationStatementComponent,
    MedicationRequestComponent,
    MedicationComponent,
    ObservationComponent,
    OrganisationComponent,
    PatientComponent,
    ProcedureComponent,
    PractitionerComponent,
    QuestionnaireResponseComponent,
    RiskAssessmentComponent,



    ResourceDialogComponent,
    MedicationDialogComponent,
    IssueDialogComponent,
    LocationDialogComponent,
    PractitionerDialogComponent,
    OrganisationDialogComponent,
    PractitionerRoleComponent,
    HealthcareServiceComponent,
    PractitionerRoleDialogComponent,
    EncounterDialogComponent,
    ObservationChartDialogComponent,
    HieMainComponent,
  //  MapComponent,
    EdEncounterListComponent,
    EdEncounterCardComponent,
    PatientMainComponent,
    PatientFindComponent,
      PatientSearchComponent,
  //    CapacityComponent,
      PatientSummaryComponent,
      PatientVitalSignsComponent,
      PatientEncountersComponent,
      PatientDocumentsComponent,
      PatientEncounterDetailComponent,
      PatientProcedureComponent,

      PatientImmunisationComponent,
      PatientMedicationComponent,


      RegisterSmartComponent,
      RegisterSmartSecretComponent,
      PatientCarePlanComponent,
      FlagComponent,
      ReferralRequestComponent,
      PatientReferralRequestComponent,
      MedicationAdministrationComponent,
  //    AmbulanceATMISTComponent,
      CareTeamComponent,
      QuestionnaireResponseItemComponent,
      HtmlViewerComponent,
      DirectoryMainComponent,
      TerminologyMainComponent,
      ValueSetsComponent,
      ConceptMapsComponent,
      QuestionnaireComponent,
      QuestionnaireItemComponent,
      EOLCIntroComponent,
      PatientEOLCComponent,
      PatientEOLCItemComponent,
      QuestionnaireResponseItemAnswerComponent,
      CarePlanActivityComponent,
      ListComponent,
      RelatedPersonComponent,
      ValueSetDetailComponent,
      QuestionnaireSummaryComponent,
      CodeSystemComponent,
      CodeSystemDetailComponent,
      NamingSystemComponent,
      NamingSystemDetailComponent,
      ConceptMapDetailComponent,
      MessageDefinitionComponent,
      MessageDefinitionDetailComponent,
      GraphDefinitionComponent,
      GraphDefinitionDetailComponent,
      GraphDefinitionLinkComponent

  ],
  entryComponents: [
    ResourceDialogComponent,
    MedicationDialogComponent,
    IssueDialogComponent,
    LocationDialogComponent,
    PractitionerDialogComponent,
    OrganisationDialogComponent,
    PractitionerRoleDialogComponent,
    EncounterDialogComponent,
    MedicationDispenseDetailComponent,
    ImmunisationDetailComponent,
      ObservationChartDialogComponent,
      PatientFindComponent,
    RegisterSmartComponent,
    RegisterSmartSecretComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,

    CookieModule
      .forRoot(),


    //   MatMomentDateModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,

    MatToolbarModule,
    MatTableModule,
    MatGridListModule,
    MatDialogModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatChipsModule,
    MatProgressBarModule,
    MatRadioModule,
    MatTooltipModule,
    MatGridListModule,
    MatGridListModule,

    DragDropModule,

    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,

    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,

    CovalentDynamicFormsModule,
    CovalentMessageModule,
    CovalentJsonFormatterModule,
    CovalentDialogsModule,
    CovalentExpansionPanelModule,
    CovalentChipsModule,
    CovalentNotificationsModule,
    CovalentMenuModule,

    CovalentDataTableModule,
    CovalentSearchModule,
    CovalentLoadingModule,

    NgxChartsModule,

    PdfViewerModule,
    ImageViewerModule,
    //  NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDC8GmtqZiQXc16qf1v870NKy-phjv-1N0'}),
    //  NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key='}),
    HieRoutingModule,
    DirectoryRoutingModule,
    // TerminologyRoutingModule,
    AppRoutingModule,

    OAuthModule.forRoot()
  ],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AppConfigService]
    },
    MatIconRegistry,
      MessageService,
    LinksService,
    EprService,
      AuthGuard,
    AuthGuardOauth2,
      AuthService,
      CookieService,
      Oauth2Service,


    /*    { provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
      {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},*/
    {
          provide: ErrorHandler,
          useClass: ErrorsHandler,
      },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}

