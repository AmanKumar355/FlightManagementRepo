import { TestBed } from '@angular/core/testing';

import { CgGuardService } from './cg-guard.service';

describe('CgGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CgGuardService = TestBed.get(CgGuardService);
    expect(service).toBeTruthy();
  });
});
