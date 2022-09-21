import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { take } from 'rxjs';
import { CountryService } from './core/services/country.service';
import { Country } from './core/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'list-of-contries';

  filterForm: FormGroup<any>;
  countries: Country[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private countryService: CountryService
  ) {
    this.filterForm = this.formBuilder.group({
      search: '',
    });
  }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.countryService
      .getCountries()
      .pipe(take(1))
      .subscribe((response: Country[] | any) => {
        this.countries = response;
        this.countries.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
      });
  }

  get search(): any {
    return this.filterForm.get('search');
  }
}
