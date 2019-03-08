import { TestBed, inject } from '@angular/core/testing';

import { PhonepickerService } from './phonepicker.service';

describe('PhonepickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhonepickerService]
    });
  });

  it('should be created', inject([PhonepickerService], (service: PhonepickerService) => {
    expect(service).toBeTruthy();
  }));
});
