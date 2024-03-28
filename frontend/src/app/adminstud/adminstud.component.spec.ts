import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstudComponent } from './adminstud.component';

describe('AdminstudComponent', () => {
  let component: AdminstudComponent;
  let fixture: ComponentFixture<AdminstudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminstudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
