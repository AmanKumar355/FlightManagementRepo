import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Airport } from '../airport';
import { Flight } from '../flight';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editschedule',
  templateUrl: './editschedule.component.html',
  styleUrls: ['./editschedule.component.css']
})
export class EditscheduleComponent implements OnInit {
  schedule:any;  
  msg: string;
  airports:Airport[];
  flights:Flight[]; 
  constructor(private flightService: FlightService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
  this.route.paramMap.subscribe(params=>{
 
    let sid:number=parseInt(params.get("scheduledFlightId"));

    this.flightService.viewScheduledFlightById(sid).subscribe(

    data=>{this.schedule=data;console.log('schedule details',this.schedule)},

    error=>this.msg=error.error.message);
});
this.flightService.viewAirports().subscribe(data=>this.airports=data);
this.flightService.viewFlights().subscribe(data=>this.flights=data);
}


editSheduledFlight() {
this.flightService.editSchedule(this.schedule).subscribe(data => { alert(data); this.router.navigateByUrl("/viewflightschedule") });
}

}
