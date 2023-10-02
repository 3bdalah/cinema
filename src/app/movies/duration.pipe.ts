import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    if (value === null || isNaN(value)) {
      return 'N/A'; // Handle invalid or missing duration values
    }

    const hours = Math.floor(value / 60); // Calculate hours
    const minutes = value % 60; // Calculate remaining minutes

    // Format the duration as 'hh:mm'
    const formattedDuration = `${hours}h ${minutes}m`;

    return formattedDuration;
  }
}
