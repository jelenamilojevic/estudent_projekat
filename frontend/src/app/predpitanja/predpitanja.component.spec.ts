import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredpitanjaComponent } from './predpitanja.component';

describe('PredpitanjaComponent', () => {
  let component: PredpitanjaComponent;
  let fixture: ComponentFixture<PredpitanjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredpitanjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredpitanjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
