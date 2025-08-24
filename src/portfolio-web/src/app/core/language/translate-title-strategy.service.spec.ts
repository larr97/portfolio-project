import { TestBed } from '@angular/core/testing';

import { TranslateTitleStrategy } from './translate-title-strategy.service';

describe('TranslateTitleStrategy', () => {
  let service: TranslateTitleStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateTitleStrategy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
