import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  public transform(value: string, limit?: number): string {
    if (limit && value.length > limit) {
      return `${value.substr(0, limit)}...`;
    }

    return value;
  }

}
