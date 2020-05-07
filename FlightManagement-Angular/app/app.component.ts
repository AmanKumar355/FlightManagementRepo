import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { FlightService } from './flight.service';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Apni flight.com';
  msg:string;
  errorMsg:string;
  login:Login=new Login();
  token:string=localStorage.getItem("token");
  flag:boolean=false;
  tokenflag:boolean=false;
  user:User=new User();
  constructor(private flightSer:FlightService,private router:Router){

  }
  ngOnInit() {
    if(localStorage.getItem("token")!=null){
      let arr = this.token.split("-");
      let userName = this.flightSer.decrypt(arr[1]);
      let role = this.flightSer.decrypt(arr[2]);
      if(role=="admin")
      this.flag=true;
    }
  }
  

  showLogin(){
   this.tokenflag=true;
  }

  hideLogin(){
    this.msg=undefined;
    this.tokenflag=false;
  }

doLogin(){
  this.msg=undefined;
  this.flightSer.doLogin(this.login.uname,this.login.pwd).subscribe(data=>{localStorage.setItem("token",data),this.msg=undefined
  console.log(data);
  let arr = data.split("-");
  this.tokenflag=false;
  this.token = localStorage.getItem("token");
  this.user.userName=this.flightSer.decrypt(arr[1]);
  let role = this.flightSer.decrypt(arr[2]);
  if(role.trim()=='admin')
        this.flag=true;
  else
        this.flag=false;
},
error=>{console.log(error);this.msg=JSON.parse(error.error).message});
console.log(this.msg);


}

logout():void{
  this.flightSer.doLogout().subscribe(data=>{console.log(data);
  localStorage.removeItem("token");
  alert("you have logged out");
  this.tokenflag=true;
  this.token=undefined;
  this.flag=false;
  this.msg="You have Logged out.";
  //this.router.navigateByUrl("/error");
  
  });
}
}

