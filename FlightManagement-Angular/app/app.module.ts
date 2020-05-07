import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewscheduleComponent } from './viewschedule/viewschedule.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AddUserComponent } from './add-user/add-user.component';

import { UploadComponent } from './upload/upload.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { AddScheduledFlightComponent } from './add-scheduled-flight/add-scheduled-flight.component';
import { ViewScheduledflightComponent } from './view-scheduledflight/view-scheduledflight.component';
import { EditscheduleComponent } from './editschedule/editschedule.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';
import { ViewpassengerComponent } from './viewpassenger/viewpassenger.component';
import { ViewPNRComponent } from './view-pnr/view-pnr.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewscheduleComponent,
    ErrorPageComponent,
    AddUserComponent,
    UploadComponent,
    ViewuserComponent,
    AddScheduledFlightComponent,
    ViewScheduledflightComponent,
    EditscheduleComponent,
    AddBookingComponent,
    EdituserComponent,
    ViewbookingComponent,
    ViewpassengerComponent,
    ViewPNRComponent,
    CancelBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
