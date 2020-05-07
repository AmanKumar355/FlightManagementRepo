import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  flag:Boolean=true;
  constructor() { 
    let token = localStorage.getItem("token");
    if(localStorage.getItem("token")!=null){
      this.flag=false;
    }
  }

  ngOnInit() {
    
  }

}
