/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BmrComponent } from './bmr.component';

describe('BmrComponent', () => {
  let component: BmrComponent;
  let fixture: ComponentFixture<BmrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
