import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherProvidersComponent } from './other-providers.component';

describe('OtherProvidersComponent', () => {
  let component: OtherProvidersComponent;
  let fixture: ComponentFixture<OtherProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
