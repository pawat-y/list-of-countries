import { Pipe, PipeTransform } from '@angular/core';
import { Country } from 'src/app/core/types';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(items: Country[], filter: string): Country[] {
    // check items or filter text should exists to filter
    if (!items || !filter) {
      return items;
    }

    // map items to {name: "country name"}
    let fieldItem = items.map((item) => {
      return {
        name: item.name.common,
      };
    });

    // return filtered country
    return items.filter(
      (item, index) =>
        JSON.stringify(fieldItem[index])
          .toLowerCase()
          .indexOf(filter.toLowerCase()) !== -1
    );
  }
}
