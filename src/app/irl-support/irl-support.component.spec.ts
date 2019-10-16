import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrlSupportComponent } from './irl-support.component';

describe('IrlSupportComponent', () => {
  let component: IrlSupportComponent;
  let fixture: ComponentFixture<IrlSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrlSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrlSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
