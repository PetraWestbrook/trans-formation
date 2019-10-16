import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgbtqCompaniesComponent } from './lgbtq-companies.component';

describe('LgbtqCompaniesComponent', () => {
  let component: LgbtqCompaniesComponent;
  let fixture: ComponentFixture<LgbtqCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgbtqCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgbtqCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
