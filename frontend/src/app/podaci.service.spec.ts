import { TestBed } from '@angular/core/testing';

import { PodaciService } from './podaci.service';

describe('PodaciService', () => {
  let service: PodaciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PodaciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
