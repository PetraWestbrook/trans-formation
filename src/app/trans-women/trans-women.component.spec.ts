import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransWomenComponent } from './trans-women.component';

describe('TransWomenComponent', () => {
  let component: TransWomenComponent;
  let fixture: ComponentFixture<TransWomenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransWomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
