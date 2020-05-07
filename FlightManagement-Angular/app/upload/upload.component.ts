import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Login } from '../login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

uid:string;
uimg:File;
msg:string;
errorMsg:string;

  constructor(private flightSer:FlightService,private route:Router) { }

  ngOnInit() {
  }
onFileChanged(event:any){
  this.uimg = event.target.files[0];
}

uploadImage(){
  let token = localStorage.getItem("token");
      let arr = token.split("-")
    this.uid=this.flightSer.decrypt(arr[0]);
    console.log(this.uid);
  this.flightSer.uploadImage(this.uid,this.uimg).subscribe(data=>{this.msg=data;console.log(data)},
  error=>{console.log(error),this.errorMsg=error.error.message,console.log(this.errorMsg)});

  
}
}
