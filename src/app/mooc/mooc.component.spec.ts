import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoocComponent } from './mooc.component';

describe('MoocComponent', () => {
  let component: MoocComponent;
  let fixture: ComponentFixture<MoocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
