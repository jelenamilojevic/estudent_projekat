import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredvezbeComponent } from './predvezbe.component';

describe('PredvezbeComponent', () => {
  let component: PredvezbeComponent;
  let fixture: ComponentFixture<PredvezbeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredvezbeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredvezbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
