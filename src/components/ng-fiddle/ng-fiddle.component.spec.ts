import {
    async,
    ComponentFixture,
    TestBed
  } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgFiddleModule } from '../../';
import { NgFiddleComponent } from './ng-fiddle.component';

describe('NgFiddleComponent Positive Test', () => {
  
  let fixture: ComponentFixture<NgFiddleComponent>;
  let component: NgFiddleComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgFiddleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFiddleComponent);
    component = fixture.componentInstance;
    component.url = 'http://jsfiddle.net/zalun/NmudS';
    component.tabs = 'result,js,html,css';
    component.skin = 'dark';
  });

  it('When loaded should work fine', () => {
    fixture.detectChanges();
    expect(component.url === 'http://jsfiddle.net/zalun/NmudS').toBeTruthy();
    expect(component.tabs === 'result,js,html,css').toBeTruthy();
    expect(component.skin === 'dark').toBeTruthy();
    expect(true).toBeTruthy();
  });

});
