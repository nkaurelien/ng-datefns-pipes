import { Pipe, PipeTransform } from '@angular/core';
import format from 'date-fns/format';
import {distanceInWords, isValidInput} from '../helper-functions';
import { DatePipeManager } from '../providers/date-pipe-manager';

/**
 * distance in words pipe by Aaron Sterling
 * takes as input an array of two dates
 * outputs the value of the date-fns DistanceInWords function
 */
@Pipe({
  name: 'distanceBetweenDates',
})
export class DistanceBetweenDatesPipe implements PipeTransform {

  constructor (private manager: DatePipeManager) {}

  transform(dates: Array<string | number | Date>) {
    if (this.manager.secondsIncludedInDistance()) {
      return distanceInWords(dates[0], dates[1], {includeSeconds: true});
    } else {
      return distanceInWords(dates[0], dates[1], {includeSeconds: false});
    }
  }
}
