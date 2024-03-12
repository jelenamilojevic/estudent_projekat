import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapizmenaComponent } from './zapizmena.component';

describe('ZapizmenaComponent', () => {
  let component: ZapizmenaComponent;
  let fixture: ComponentFixture<ZapizmenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZapizmenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZapizmenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
