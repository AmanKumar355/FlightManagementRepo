import { Component, OnInit } from '@angular/core';
import { ScheduleForm } from '../schedule-form';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';
import { Airport } from '../airport';

@Component({
  selector: 'app-add-scheduled-flight',
  templateUrl: './add-scheduled-flight.component.html',
  styleUrls: ['./add-scheduled-flight.component.css']
})
export class AddScheduledFlightComponent implements OnInit {
  schedule:ScheduleForm=new ScheduleForm();
  flights:Flight[]=[];
  airports:Airport[]=[];
  msg:string;
  errorMsg:string;
  constructor(private flightService:FlightService) { }

  ngOnInit() {
    this.flightService.viewFlights().subscribe(data=>{this.flights=data,console.log(data)});
    
    this.flightService.viewAirports().subscribe(data=>this.airports=data);
  }
  addSchedule(){
    if(this.schedule.seats<=0 || this.schedule.seats > 300)
         this.msg='Seats must be max 300';
    else{
    this.flightService.addSchedule(this.schedule).subscribe((data)=>{
      console.log("data",data);
      this.msg=data;this.errorMsg=undefined;this.schedule=new ScheduleForm()
    },
    error=>{this.errorMsg=JSON.parse(error.error).message;
    console.log(this.errorMsg);this.msg=undefined});
    }
  }

}

