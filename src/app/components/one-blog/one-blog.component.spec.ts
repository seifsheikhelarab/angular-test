import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneBlogComponent } from './one-blog.component';

describe('OneBlogComponent', () => {
  let component: OneBlogComponent;
  let fixture: ComponentFixture<OneBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
