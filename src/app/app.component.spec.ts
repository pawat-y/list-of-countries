import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CountryService } from './core/services/country.service';
import { SearchPipe } from './shared/pipes/search.pipe';

describe('AppComponent', () => {
  let countryService: jasmine.SpyObj<CountryService>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, SearchPipe],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [CountryService],
    }).compileComponents();

    countryService = TestBed.get(CountryService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'list-of-contries'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('list-of-contries');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain(
  //     'list-of-contries app is running!'
  //   );
  // });

  it('getCountries()', () => {
    const mockResponse = [
      {
        name: {
          common: 'Thailand',
          official: 'Thailand',
        },
      },
      {
        name: {
          common: 'United Kingdom',
          official: 'United Kingdom',
        },
      },
    ];
    countryService.getCountries().subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://restcountries.com/v3.1/all');

    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);
  });
});
