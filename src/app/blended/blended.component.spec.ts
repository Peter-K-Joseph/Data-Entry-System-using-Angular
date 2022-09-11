import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlendedComponent } from './blended.component';

describe('BlendedComponent', () => {
  let component: BlendedComponent;
  let fixture: ComponentFixture<BlendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlendedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
