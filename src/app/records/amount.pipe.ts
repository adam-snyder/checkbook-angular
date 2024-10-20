import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount',
  standalone: true
})
export class AmountPipe implements PipeTransform {
  transform(value: number): string {
    return !value ? '-' : value.toFixed(2);
  }

}
