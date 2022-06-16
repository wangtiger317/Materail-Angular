import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { AngularMaterialModule } from './material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ServiceComponent} from './service/service.component';
import {LanguageComponent} from './language/language.component';
import {CertificationComponent} from './certification/certification.component';
import {CertificationReleatedComponent} from './certification-releated/certification-releated.component';
import {CaregiverComponent} from './caregiver/caregiver.component';
import { SpecailComponent } from './specail/specail.component';
import { HomeWithComponent } from './home-with/home-with.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatStepperModule} from '@angular/material';
import { StepperOverviewExampleComponent } from './stepper-overview-example/stepper-overview-example.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { BlockCardComponent } from './block-card/block-card.component';
import { MatFileUploadModule } from 'angular-material-fileupload';



@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    LanguageComponent,
    CertificationComponent,
    CertificationReleatedComponent,
    CaregiverComponent,
    SpecailComponent,
    HomeWithComponent,
    StepperOverviewExampleComponent,
    FileUploadComponent,
    BlockCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    AngularMaterialModule,
    MatStepperModule,
    MatFileUploadModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
