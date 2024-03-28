import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsnovnertiComponent } from './osnovnerti.component';

describe('OsnovnertiComponent', () => {
  let component: OsnovnertiComponent;
  let fixture: ComponentFixture<OsnovnertiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsnovnertiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsnovnertiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
