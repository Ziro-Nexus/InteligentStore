import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigComponent } from './sig.component';

describe('SigComponent', () => {
  let component: SigComponent;
  let fixture: ComponentFixture<SigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigComponent]
    });
    fixture = TestBed.createComponent(SigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
