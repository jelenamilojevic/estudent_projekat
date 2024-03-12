import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredlabComponent } from './predlab.component';

describe('PredlabComponent', () => {
  let component: PredlabComponent;
  let fixture: ComponentFixture<PredlabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredlabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
