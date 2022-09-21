import { Country } from 'src/app/core/types';
import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  const pipe = new SearchPipe();
  const countries: Country[] = [
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

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('search "" in items', () => {
    expect(pipe.transform(countries, '')).toEqual([
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
    ]);
  });

  it('search "thailand" in items', () => {
    expect(pipe.transform(countries, 'thailand')).toEqual([
      {
        name: {
          common: 'Thailand',
          official: 'Thailand',
        },
      },
    ]);
  });

  it('search "united states" in items', () => {
    expect(pipe.transform(countries, 'united states')).toEqual([]);
  });
});
