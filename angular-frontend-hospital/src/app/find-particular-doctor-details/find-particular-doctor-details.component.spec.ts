import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindParticularDoctorDetailsComponent } from './find-particular-doctor-details.component';

describe('FindParticularDoctorDetailsComponent', () => {
  let component: FindParticularDoctorDetailsComponent;
  let fixture: ComponentFixture<FindParticularDoctorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindParticularDoctorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindParticularDoctorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
