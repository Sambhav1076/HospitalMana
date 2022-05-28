import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCountDataComponent } from './get-count-data.component';

describe('GetCountDataComponent', () => {
  let component: GetCountDataComponent;
  let fixture: ComponentFixture<GetCountDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCountDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCountDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
