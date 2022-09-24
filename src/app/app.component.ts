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

  isLoading: boolean = false;
  isError: boolean = false;

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
    this.isLoading = true;

    this.countryService
      .getCountries()
      .pipe(take(1))
      .subscribe(
        (response: Country[] | any) => {
          this.isLoading = false;
          this.isError = false;

          this.countries = response;

          // Sort countries by name A-Z
          this.countries.sort((a, b) =>
            a.name.common.localeCompare(b.name.common)
          );
        },
        (error) => {
          this.isLoading = false;
          this.isError = true;
        }
      );
  }

  get search(): any {
    return this.filterForm.get('search');
  }
}
