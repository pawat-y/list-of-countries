import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CountryService } from './country.service';
import { HttpClientModule } from '@angular/common/http';

describe('CountryService', () => {
  let countryService: CountryService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [CountryService],
    }).compileComponents();

    countryService = TestBed.get(CountryService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(countryService).toBeTruthy();
  });

  it('should call rooms data', () => {
    const mockResponse = [
      {
        name: {
          common: 'Thailand',
          official: 'Thailand',
        },
      },
    ];

    countryService.getCountries().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://restcountries.com/v3.1/all');

    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);
  });
});
