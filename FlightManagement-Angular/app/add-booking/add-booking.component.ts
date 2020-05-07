import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightService } from '../flight.service';
import { BookingForm } from '../booking-form';
import { ScheduledFlight } from '../scheduled-flight';
import { Airport } from '../airport';
import { Flight } from '../flight';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Passenger } from '../passenger';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {
  bookForm:BookingForm=new BookingForm();
submitted=false;
msg:String;
errorMsg:string;
schedule:ScheduledFlight[];
airports:Airport[];
flights:Flight[];

showFlag=true;
@ViewChild('frm')
form:NgForm
  constructor(private flightservice:FlightService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.bookForm.scheduleFlightId=parseInt(params.get("sid"));
     });
    
   }
   bookFlight(){
    this.flightservice.addbooking(this.bookForm).subscribe(data=>{this.msg=data.message;alert(this.msg);console.log(data);
    this.form.resetForm();this.errorMsg=undefined},
    error=>{this.errorMsg=error.error.message;console.log(this.errorMsg);this.msg=undefined;
    }
    )
    
  }
  displayrows(){
    this.bookForm.passengers=[];
    if(this.bookForm.tkts>0 && this.bookForm.tkts<=5){
    for(let idx=0;idx<this.bookForm.tkts;++idx){
      this.bookForm.passengers.push(new Passenger());
    }
  }
  }

}
