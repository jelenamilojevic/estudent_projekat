import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminplanComponent } from './adminplan.component';

describe('AdminplanComponent', () => {
  let component: AdminplanComponent;
  let fixture: ComponentFixture<AdminplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
