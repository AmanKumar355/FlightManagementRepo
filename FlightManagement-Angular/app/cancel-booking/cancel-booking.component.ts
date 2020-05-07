import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent implements OnInit {
msg:string;
errorMsg:string;

bookingId:string;
  constructor(private bookingService:FlightService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{this.bookingId=params.get('bookingid');

  })
    this.bookingService.cancelbooking(this.bookingId).subscribe(data=>{this.msg=data,console.log(this.msg);},
      error=>{this.errorMsg=error.error.message});
  }

  Goback(){
    this.router.navigateByUrl("/viewbooking");
  }
}

