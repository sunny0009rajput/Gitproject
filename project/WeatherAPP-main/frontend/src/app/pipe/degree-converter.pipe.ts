import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degreeConverter'
})
export class DegreeConverterPipe implements PipeTransform {

  transform(value: number): number {
    
    return Math.round(value-273);
  }

}
