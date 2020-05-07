import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  constructor(private datePipe:DatePipe){}
  transform(value: any, ...args: any[]) {
    return this.datePipe.transform(value,'yyyy-mm-d h:mm')
    throw new Error("Method not implemented.");
  }

 

}
