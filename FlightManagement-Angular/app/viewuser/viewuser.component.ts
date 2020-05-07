import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Login } from '../login';
import { User } from '../user';

import { Router } from '@angular/router';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

user:User=null;
userId:string;

msg:string;
  constructor(private userSer:FlightService,private router:Router) { }

  ngOnInit() {
    let token = localStorage.getItem("token");
      let arr = token.split("-")
    this.userId=this.userSer.decrypt(arr[0]);
    this.userSer.viewUser(this.userId).subscribe(data=>{this.user=data,this.msg=undefined,console.log(this.user)},
      error=>{console.log(error);this.msg=error.error.message;this.user=null});
      console.log(this.userId);
    }

    upload(){
     this.router.navigateByUrl("/upload");
    }
  }

