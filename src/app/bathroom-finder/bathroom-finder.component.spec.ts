import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroomFinderComponent } from './bathroom-finder.component';

describe('BathroomFinderComponent', () => {
  let component: BathroomFinderComponent;
  let fixture: ComponentFixture<BathroomFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BathroomFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BathroomFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
