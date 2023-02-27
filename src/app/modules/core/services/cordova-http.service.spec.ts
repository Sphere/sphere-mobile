import { TestBed } from '@angular/core/testing';

import { CordovaHttpService } from './cordova-http.service';

describe('CordovaHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CordovaHttpService = TestBed.get(CordovaHttpService);
    expect(service).toBeTruthy();
  });
});
