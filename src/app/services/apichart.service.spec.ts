import { TestBed } from '@angular/core/testing';

import { APIChartService } from './apichart.service';

describe('APIChartService', () => {
  let service: APIChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
