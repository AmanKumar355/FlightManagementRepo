import { Component, OnInit } from '@angular/core';
import { ScheduledFlight } from '../scheduled-flight';
import { FlightService } from '../flight.service';
import { Airport } from '../airport';

@Component({
  selector: 'app-viewschedule',
  templateUrl: './viewschedule.component.html',
  styleUrls: ['./viewschedule.component.css']
})
export class ViewscheduleComponent implements OnInit {

  scheduledflight:ScheduledFlight[]=[];
  src:string;
  dest:string;
  doj:Date;
  msg:string;
  airports:Airport[]=[];
  constructor(private flightser:FlightService) { }

  ngOnInit() {
    this.flightser.viewAirports().subscribe(data=>this.airports=data);
    console.log(this.airports);
  }

  viewScheduledFlight(){
    console.log(this.src);
    this.flightser.viewschedule(this.src,this.dest,this.doj).subscribe(data=>{this.scheduledflight=data,console.log(this.scheduledflight),
      this.msg=undefined}
    ,error=>{console.log(error);this.msg=error.error.message; console.log(this.msg)}

      );
   
  }

}
