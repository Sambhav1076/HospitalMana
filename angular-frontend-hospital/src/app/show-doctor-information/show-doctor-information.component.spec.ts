import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDoctorInformationComponent } from './show-doctor-information.component';

describe('ShowDoctorInformationComponent', () => {
  let component: ShowDoctorInformationComponent;
  let fixture: ComponentFixture<ShowDoctorInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDoctorInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDoctorInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
