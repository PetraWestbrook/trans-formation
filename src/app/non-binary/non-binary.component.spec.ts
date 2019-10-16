import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonBinaryComponent } from './non-binary.component';

describe('NonBinaryComponent', () => {
  let component: NonBinaryComponent;
  let fixture: ComponentFixture<NonBinaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonBinaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonBinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
