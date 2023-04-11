import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderisComponent } from './headeris.component';

describe('HeaderisComponent', () => {
  let component: HeaderisComponent;
  let fixture: ComponentFixture<HeaderisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
