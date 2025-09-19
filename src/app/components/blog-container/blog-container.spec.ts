import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogContainer } from './blog-container';

describe('BlogContainer', () => {
  let component: BlogContainer;
  let fixture: ComponentFixture<BlogContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
