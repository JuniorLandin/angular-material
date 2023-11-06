import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsIconsComponent } from './buttons-icons/buttons-icons.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { TabsComponent } from './tabs/tabs.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SnackbarMsgComponent } from './snackbar/snackbar-msg/snackbar-msg.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogMsgComponent } from './dialog/dialog-msg/dialog-msg.component';
import { DatatableComponent } from './datatable/datatable.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsIconsComponent,
    ProgressSpinnerComponent,
    TabsComponent,
    DatepickerComponent,
    SnackbarComponent,
    SnackbarMsgComponent,
    DialogComponent,
    DialogMsgComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
