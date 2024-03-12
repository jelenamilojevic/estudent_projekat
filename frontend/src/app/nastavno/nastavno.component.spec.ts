import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NastavnoComponent } from './nastavno.component';

describe('NastavnoComponent', () => {
  let component: NastavnoComponent;
  let fixture: ComponentFixture<NastavnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NastavnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NastavnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
