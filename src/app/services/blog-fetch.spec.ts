import { TestBed } from '@angular/core/testing';

import { BlogFetch } from './blog-fetch';

describe('BlogFetch', () => {
  let service: BlogFetch;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogFetch);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
