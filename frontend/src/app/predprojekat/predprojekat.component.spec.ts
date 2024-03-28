import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredprojekatComponent } from './predprojekat.component';

describe('PredprojekatComponent', () => {
  let component: PredprojekatComponent;
  let fixture: ComponentFixture<PredprojekatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredprojekatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredprojekatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
