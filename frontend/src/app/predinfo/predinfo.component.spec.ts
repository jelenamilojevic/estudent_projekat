import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredinfoComponent } from './predinfo.component';

describe('PredinfoComponent', () => {
  let component: PredinfoComponent;
  let fixture: ComponentFixture<PredinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
