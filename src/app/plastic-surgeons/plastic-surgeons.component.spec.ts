import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasticSurgeonsComponent } from './plastic-surgeons.component';

describe('PlasticSurgeonsComponent', () => {
  let component: PlasticSurgeonsComponent;
  let fixture: ComponentFixture<PlasticSurgeonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlasticSurgeonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasticSurgeonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
