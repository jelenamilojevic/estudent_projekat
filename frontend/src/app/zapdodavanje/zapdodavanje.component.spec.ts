import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapdodavanjeComponent } from './zapdodavanje.component';

describe('ZapdodavanjeComponent', () => {
  let component: ZapdodavanjeComponent;
  let fixture: ComponentFixture<ZapdodavanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZapdodavanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZapdodavanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
