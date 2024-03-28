import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZappredmetiComponent } from './zappredmeti.component';

describe('ZappredmetiComponent', () => {
  let component: ZappredmetiComponent;
  let fixture: ComponentFixture<ZappredmetiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZappredmetiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZappredmetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
