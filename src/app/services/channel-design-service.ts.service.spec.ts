import { TestBed } from '@angular/core/testing';

import { ChannelDesignServiceTsService } from './channel-design-service.ts.service';

describe('ChannelDesignServiceTsService', () => {
  let service: ChannelDesignServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChannelDesignServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
