import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewscheduleComponent } from './viewschedule/viewschedule.component';
import { CgGuardService } from './cg-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UploadComponent } from './upload/upload.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { AddScheduledFlightComponent } from './add-scheduled-flight/add-scheduled-flight.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { EditscheduleComponent } from './editschedule/editschedule.component';
import { ViewScheduledflightComponent } from './view-scheduledflight/view-scheduledflight.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';
import { ViewpassengerComponent } from './viewpassenger/viewpassenger.component';
import { ViewPNRComponent } from './view-pnr/view-pnr.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';
import { AppComponent } from './app.component';

const routes: Routes = [
{path:'viewschedule',component:ViewscheduleComponent ,canActivate:[CgGuardService]},
{path:'adduser', component:AddUserComponent},
{path:'error',component:ErrorPageComponent},
{path:'upload',component:UploadComponent,canActivate:[CgGuardService]},
{path:'viewuser',component:ViewuserComponent,canActivate:[CgGuardService]},
{path:'addschedule',component:AddScheduledFlightComponent,canActivate:[CgGuardService],data:{role:"admin"}},
{path:'editschedule/:scheduledFlightId',component:EditscheduleComponent,canActivate:[CgGuardService],data:{role:"admin"}},
{path:'viewflightschedule', component:ViewScheduledflightComponent,canActivate:[CgGuardService],data:{role:"admin"}},
{path:'addbook/:sid',component:AddBookingComponent,canActivate:[CgGuardService]},
{path:'cancelbooking/:bookingid',component:CancelBookingComponent,canActivate:[CgGuardService]},
{path:'edituser/:contactNo',component:EdituserComponent,canActivate:[CgGuardService]},
{path: "viewbooking",component:ViewbookingComponent,canActivate:[CgGuardService]},
{path: "viewbooking/:bookForm.contactNo",component:ViewbookingComponent,canActivate:[CgGuardService]},
  {path: "viewpassengers/:bid",component:ViewpassengerComponent},
  {path:"viewbyPNR",component:ViewPNRComponent,canActivate:[CgGuardService]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
