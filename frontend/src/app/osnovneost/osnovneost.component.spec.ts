import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsnovneostComponent } from './osnovneost.component';

describe('OsnovneostComponent', () => {
  let component: OsnovneostComponent;
  let fixture: ComponentFixture<OsnovneostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsnovneostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsnovneostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
