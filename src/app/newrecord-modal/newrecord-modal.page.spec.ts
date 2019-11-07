import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrecordModalPage } from './newrecord-modal.page';

describe('NewrecordModalPage', () => {
  let component: NewrecordModalPage;
  let fixture: ComponentFixture<NewrecordModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewrecordModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewrecordModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
