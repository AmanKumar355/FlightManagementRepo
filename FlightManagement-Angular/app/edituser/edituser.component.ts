import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  user:any;
  userId:string;
  msg:string;
  constructor(private flightservice:FlightService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params=>{
 
      let userId:string=params.get("contactNo");

      this.flightservice.viewUser(userId).subscribe(

      data=>{this.user=data;console.log('user details',this.user)},

      error=>this.msg=error.error.message);
});
  }

  editUser() {
    this.flightservice.editUser(this.user).subscribe(data => { alert(data); this.router.navigateByUrl("/viewuser")});
  }
}
