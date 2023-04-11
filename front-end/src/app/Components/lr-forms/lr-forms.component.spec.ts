import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrFormsComponent } from './lr-forms.component';

describe('LrFormsComponent', () => {
  let component: LrFormsComponent;
  let fixture: ComponentFixture<LrFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LrFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LrFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
