import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
user:User= new User();

userId:string;
msg:string;
errorMsg:string;
flag:Boolean=true;

  constructor(private userSer:FlightService, private router:Router) { }

  ngOnInit() {
    
  }
  adduser(){
    this.user.role="user";
    this.userSer.adduser(this.user).subscribe((data)=>{console.log("data",data);
    this.msg=data;this.flag=false;this.errorMsg=undefined;this.user=new User()},
error=>{this.errorMsg=JSON.parse(error.error).message;console.log(this.errorMsg);this.msg=undefined});



}
  }


