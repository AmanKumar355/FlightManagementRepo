import { User } from './user';
import { ScheduledFlight } from './scheduled-flight';

export class Booking {
    bookingId:string;
    noOfSeats:number;
    bookingDate:string;
    fare:DoubleRange;
    user:User=new User();
    schedule:ScheduledFlight=new ScheduledFlight();
}
