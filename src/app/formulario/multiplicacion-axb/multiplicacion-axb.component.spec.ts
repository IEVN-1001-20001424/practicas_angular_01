import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicacionAXBComponent } from './multiplicacion-axb.component';

describe('MultiplicacionAXBComponent', () => {
  let component: MultiplicacionAXBComponent;
  let fixture: ComponentFixture<MultiplicacionAXBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplicacionAXBComponent]
    });
    fixture = TestBed.createComponent(MultiplicacionAXBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
