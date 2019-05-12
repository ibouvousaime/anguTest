import { TestBed } from '@angular/core/testing';

import { MongoserviceService } from './mongoservice.service';

describe('MongoserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MongoserviceService = TestBed.get(MongoserviceService);
    expect(service).toBeTruthy();
  });
});
