import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsnovnesiComponent } from './osnovnesi.component';

describe('OsnovnesiComponent', () => {
  let component: OsnovnesiComponent;
  let fixture: ComponentFixture<OsnovnesiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsnovnesiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsnovnesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
