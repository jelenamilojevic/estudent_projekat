import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapizmenaformaComponent } from './zapizmenaforma.component';

describe('ZapizmenaformaComponent', () => {
  let component: ZapizmenaformaComponent;
  let fixture: ComponentFixture<ZapizmenaformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZapizmenaformaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZapizmenaformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
