import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWarningDeleteComponent } from './dialog-warning-delete.component';

describe('DialogWarningDeleteComponent', () => {
  let component: DialogWarningDeleteComponent;
  let fixture: ComponentFixture<DialogWarningDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogWarningDeleteComponent]
    });
    fixture = TestBed.createComponent(DialogWarningDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
