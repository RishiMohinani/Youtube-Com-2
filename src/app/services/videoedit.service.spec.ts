import { TestBed } from '@angular/core/testing';

import { VideoeditService } from './videoedit.service';

describe('VideoeditService', () => {
  let service: VideoeditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoeditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
