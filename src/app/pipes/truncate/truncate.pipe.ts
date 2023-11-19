import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone:true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 100, showFull: boolean = false): string {
    if (showFull || value.length <= limit) {
      return value;
    }
    const truncatedText = value.substring(0, limit);
    const lastSpaceIndex= truncatedText.lastIndexOf(' ');
    const finalValue = truncatedText.substr(0, lastSpaceIndex);
    return `${finalValue}...`
  }

}