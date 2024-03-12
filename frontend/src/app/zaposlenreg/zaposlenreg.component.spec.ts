import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposlenregComponent } from './zaposlenreg.component';

describe('ZaposlenregComponent', () => {
  let component: ZaposlenregComponent;
  let fixture: ComponentFixture<ZaposlenregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposlenregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaposlenregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
