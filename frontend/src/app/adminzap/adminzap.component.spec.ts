import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminzapComponent } from './adminzap.component';

describe('AdminzapComponent', () => {
  let component: AdminzapComponent;
  let fixture: ComponentFixture<AdminzapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminzapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminzapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
