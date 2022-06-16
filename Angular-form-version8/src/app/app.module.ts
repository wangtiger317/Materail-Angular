import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AngularMaterialModule} from './material.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FileUploadComponent} from './file-upload/file-upload.component';
import {LimitationComponent} from './limitation/limitation.component';
import {RoutineComponent} from './routine/routine.component';
import {EmergencyComponent} from './emergency/emergency.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StepperComponent} from './stepper/stepper.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material';
import { TableComponent } from './table/table.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { BlockCardComponent } from './block-card/block-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    LimitationComponent,
    RoutineComponent,
    EmergencyComponent,
    StepperComponent,
    TableComponent,
    BlockCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    AngularMaterialModule,
    MatStepperModule,
    MatFileUploadModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
