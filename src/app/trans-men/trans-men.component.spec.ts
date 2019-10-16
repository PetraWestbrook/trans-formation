import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransMenComponent } from './trans-men.component';

describe('TransMenComponent', () => {
  let component: TransMenComponent;
  let fixture: ComponentFixture<TransMenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransMenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
