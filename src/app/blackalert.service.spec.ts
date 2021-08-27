import { TestBed } from '@angular/core/testing';

import { BlackalertService } from './blackalert.service';

describe('BlackalertService', () => {
  let service: BlackalertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlackalertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
