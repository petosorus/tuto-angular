import { TestBed } from '@angular/core/testing';

import { RandomBeerResolver } from './random-beer.resolver';

describe('RandomBeerResolver', () => {
  let resolver: RandomBeerResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RandomBeerResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
