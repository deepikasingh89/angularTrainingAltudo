import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, args:any=''): unknown {
    console.log('value', value, args);
    if (!value) return null;
    else{
        let len = args ? args : 50;
        return value.substring(0, len);
    }
      
  }

}
