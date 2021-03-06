/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BfComponent } from './bf.component';

describe('BfComponent', () => {
  let component: BfComponent;
  let fixture: ComponentFixture<BfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
