import { ComponentFixture, TestBed } from '@angular/core/testing';

import { slideComponent } from './slide.component';

describe('slideComponent', () => {
  let component:slideComponent;
  let fixture: ComponentFixture<slideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ slideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(slideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
