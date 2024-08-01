import { TestBed } from '@angular/core/testing';

import { VideosearchService } from './videosearch.service';

describe('VideosearchService', () => {
  let service: VideosearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideosearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
