import { Pipe, PipeTransform } from '@angular/core';
import { alumnosIr } from '../alumnoIr';

@Pipe({
  name: 'alumnosfilter'
})
export class FilterPipe implements PipeTransform {

  transform(value: alumnosIr[], ...args: string[]): alumnosIr {
    let filter:string=args ? 
  }

}
