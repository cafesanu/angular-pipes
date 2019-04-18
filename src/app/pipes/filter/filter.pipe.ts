import { Pipe, PipeTransform } from '@angular/core';

// tslint:disable: no-any no-unsafe-any pipe-impure
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  public transform(array: any[], propName: string, value: string): any[] {
    if (array.length === 0 || value === '') {
      return array;
    }

    return array.filter((item: any) => item[propName] === value);
  }
}
