import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { ScheduleForm } from './schedule-form';
import { ScheduledFlight } from './scheduled-flight';
import { BookingForm } from './booking-form';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  
  constructor(private http:HttpClient) { }


  public viewschedule(src:string,dest:string,doj:Date):Observable<any>{
    let utoken = localStorage.getItem("token");
    if(utoken==null)utoken="";
    const httpHeaders = new HttpHeaders({"userId": utoken});
    console.log(utoken);
     let source = src.toUpperCase();
     let destination = dest.toUpperCase();
    return this.http.get("http://localhost:8082/flightmanagement/viewschedule/"+source+"/"+destination+"/"+doj,{headers:httpHeaders});
  }
  public adduser(user:User):Observable<any>{
    let utoken = localStorage.getItem("token");
    if(utoken==null)utoken="";
    const httpHeaders = new HttpHeaders({"userId": utoken});
    console.log(utoken);

    return this.http.post("http://localhost:8082/flightmanagement/adduser",user,{headers:httpHeaders,responseType:'text'});
  }

  decrypt(token:string){
    let str = "";
    for(let i =0; i<token.length; ++i){
      str = str + String.fromCharCode(token.charCodeAt(i)-3);
     
    }
    console.log(str);
    return str;
  }

  public doLogin(userId:string,pwd:string):Observable<any>{
    let postData = new FormData();
    postData.append('userId',userId);
    postData.append('password',pwd);
      
    return this.http.post("http://localhost:8082/flightmanagement/login",postData,{responseType:'text'});
  }
  public doLogout(){
    let utoken = localStorage.getItem("token");
    if(utoken==null)utoken="";
    const httpHeaders = new HttpHeaders({"userId":utoken});
    return this.http.get("http://localhost:8082/flightmanagement/logout",{headers:httpHeaders,responseType:'text'});
  }

  public uploadImage(uid:string, uimg:File):Observable<any>{
    let postData = new FormData();
    postData.append('txtfile',uimg);
    postData.append('txtuid',uid);
      
    return this.http.post("http://localhost:8082/flightmanagement/upload",postData,{responseType:'text'});
  }

  public viewUser(userId:string):Observable<any>{
    let utoken = localStorage.getItem("token");

    if(utoken==null)utoken="";
    const httpHeaders = new HttpHeaders({"userId": utoken});
    console.log(utoken);
    return this.http.get("http://localhost:8082/flightmanagement/viewuser/"+userId,{headers:httpHeaders});
  }

  public viewAirports():Observable<any> {
    return this.http.get("http://localhost:8082/flightmanagement/viewairport");
  }
  
  public viewFlights():Observable<any> {
    return this.http.get("http://localhost:8082/flightmanagement/viewflight");
  }

  public addSchedule(schedule:ScheduleForm):Observable<any> {
    let utoken = localStorage.getItem("token");
    if(utoken==null)utoken="";
    const httpHeaders = new HttpHeaders({"userId": utoken});
    console.log(utoken);
    return this.http.post("http://localhost:8082/flightmanagement/addschedule",schedule,{headers:httpHeaders,responseType:'text'});
  }

  public editSchedule(schedule:ScheduledFlight):Observable<any> {
    let utoken = localStorage.getItem("token");
    if(utoken==null)utoken="";
    const httpHeaders = new HttpHeaders({"userId": utoken});
    console.log(utoken);
    return this.http.put("http://localhost:8082/flightmanagement/editschedule",schedule,{headers:httpHeaders,responseType:'text'});
  }

  public viewScheduledFlightById(scheduleid:number):Observable<any> {
    
    return this.http.get("http://localhost:8082/flightmanagement/getschedule/"+scheduleid);
  }

  public addbooking(bookingfrm:BookingForm):Observable<any> {
    let utoken = localStorage.getItem("token");
    if(utoken==null)utoken="";
    const httpHeaders = new HttpHeaders({"userId": utoken});
    console.log(utoken);
    return this.http.post("http://localhost:8082/flightmanagement/addbooking",bookingfrm,{headers:httpHeaders, responseType:'json'});
  }
  public cancelbooking(bookingid:string):Observable<any> {
    let utoken = localStorage.getItem("token");
    if(utoken==null)utoken="";
    const httpHeaders = new HttpHeaders({"userId": utoken});
    console.log(utoken);
    return this.http.delete("http://localhost:8082/flightmanagement/cancelbooking/"+bookingid,{headers:httpHeaders,responseType:'text'});
  }

  public editUser(user:User):Observable<any> {
    return this.http.put("http://localhost:8082/flightmanagement/edituser",user,{responseType:'text'});
  }

  public viewBooking(contact:string):Observable<any>{
    let utoken = localStorage.getItem("token");
    if(utoken==null)utoken="";
    const httpHeaders = new HttpHeaders({"userId": utoken});
    return this.http.get("http://localhost:8082/flightmanagement/viewbooking/"+contact,{headers:httpHeaders});
  }
  public viewPassenger(bookId:string):Observable<any>{
    let utoken = localStorage.getItem("token");
    if(utoken==null)utoken="";
    const httpHeaders = new HttpHeaders({"userId": utoken});
    return this.http.get("http://localhost:8082/flightmanagement/viewpassenger/"+bookId,{headers:httpHeaders,responseType:'json'});
  }

  public download(bookingId:string):Observable<any>{
    return this.http.get("http://localhost:8082/flightmanagement/viewpdf/"+bookingId,{responseType:'blob' as'json'});
  }
}
