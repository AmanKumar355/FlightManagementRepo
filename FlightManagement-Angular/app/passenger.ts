import { Booking } from './booking';

export class Passenger {
    id:number;
    passengerName:string;
    age:number;
    gender:string;
   bookingId:Booking=new Booking();
}
