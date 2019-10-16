import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformedProvidersComponent } from './informed-providers.component';

describe('InformedProvidersComponent', () => {
  let component: InformedProvidersComponent;
  let fixture: ComponentFixture<InformedProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformedProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformedProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
