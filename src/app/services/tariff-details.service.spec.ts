import { TestBed } from '@angular/core/testing';

import { TariffDetailsService } from './tariff-details.service';

describe('TariffDetailsService', () => {
  let service: TariffDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TariffDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
