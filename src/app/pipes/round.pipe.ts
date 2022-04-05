import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})

export class RoundPipe {
  transform (input:number) {
    return input.toFixed(2);
    // return (Math.round(input * 100) / 100).toFixed(2);
  }
}
