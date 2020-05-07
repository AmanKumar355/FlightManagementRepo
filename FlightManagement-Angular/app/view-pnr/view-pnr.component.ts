import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { FlightService } from '../flight.service';
import { User } from '../user';

@Component({
  selector: 'app-view-pnr',
  templateUrl: './view-pnr.component.html',
  styleUrls: ['./view-pnr.component.css']
})
export class ViewPNRComponent implements OnInit {

  bookings:Booking[]=[];
  user:User;
  book:Booking;
  bookingId:string;
  msg:string;
  contact:string;
  constructor(private flightservice:FlightService) { }

  ngOnInit() {
  }

  viewByPNR(){
    this.flightservice.viewBooking(this.contact).subscribe(data=>{this.bookings=data;console.log(this.bookings);
      this.bookings=this.bookings.filter(book=>book.user.contactNo==this.contact && book.bookingId==this.bookingId);
      if(this.bookings.length > 0)
      this.book= this.bookings[0]; this.msg=undefined},
    error=>{console.log(error);this.msg=error.error.message;this.book=null});
  }

  goBack(){
    this.book=null;
  }
}
