import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { projectDetailGuard } from './project-detail-guard';

describe('projectDetailGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => projectDetailGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
