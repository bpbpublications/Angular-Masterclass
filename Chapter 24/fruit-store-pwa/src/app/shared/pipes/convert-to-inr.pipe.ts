import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToInr'
})
export class ConvertToInrPipe implements PipeTransform {

  conversionFactor = 83.01;
  transform(value: number, digits: number): number {
    const convertedValue = value * this.conversionFactor;
    return parseFloat(convertedValue.toFixed(digits));
  }

}
