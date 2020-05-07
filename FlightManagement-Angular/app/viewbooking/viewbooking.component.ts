import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Booking } from '../booking';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.css']
})
export class ViewbookingComponent implements OnInit {

  booking:Booking[]=[];
  contact:string;
  msg:string;
  constructor(private flightservice:FlightService,private route:Router) { }

  ngOnInit() {

  }
  viewByContact(){
    this.flightservice.viewBooking(this.contact).subscribe(data=>{this.booking=data;console.log(this.booking);this.msg=undefined},
    error=>{console.log(error);this.msg=error.error.message;console.log(this.msg);this.booking=null});
  }
  
  goToPassenger(bookId:string){
    this.route.navigateByUrl("viewpassengers/"+bookId);
  }

  download(bookingId:string){
    this.flightservice.download(bookingId).subscribe(data=>{ let blob = new Blob([data], {type: 'application/pdf'});

  var downloadURL = window.URL.createObjectURL(data);
  var link = document.createElement('a');
  link.href = downloadURL;
  link.download = "report.pdf";
  link.click();}
);
}
  }


