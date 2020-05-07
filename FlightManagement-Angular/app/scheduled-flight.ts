import { Airport } from './airport';
import { Flight } from './flight';
import { DatePipe, getLocaleDateTimeFormat } from '@angular/common';

export class ScheduledFlight {

     scheduledFlightId:number;
     availableSeats:number;
     arrivalTime:String
     departureTime:String
     fare:number;
     minutes:number;
     scheduleStatus:string;
     dynamicPrice:number;
     sourceAirport:Airport=new Airport();
     destinationAirport:Airport=new Airport();
     flight:Flight=new Flight();


}

