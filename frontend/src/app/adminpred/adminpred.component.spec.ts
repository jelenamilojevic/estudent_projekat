import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpredComponent } from './adminpred.component';

describe('AdminpredComponent', () => {
  let component: AdminpredComponent;
  let fixture: ComponentFixture<AdminpredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
