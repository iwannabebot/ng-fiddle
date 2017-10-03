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
  TestBed.configureTestingModule({
    declarations: [NgFiddleComponent]
  });
  const fixture: ComponentFixture<NgFiddleComponent> = TestBed.createComponent(NgFiddleComponent);
  const component: NgFiddleComponent = this.fixture.componentInstance;

  beforeEach(() => {
    this.component.url = 'http://jsfiddle.net/zalun/NmudS';
    this.component.tabs = 'result,js,html,css';
    this.component.skin = 'dark';
  });

  it('When loaded should work fine', () => {
    this.fixture.detectChanges();
    expect(this.component.url === 'http://jsfiddle.net/zalun/NmudS').toBeTruthy();
    expect(this.component.tabs === 'result,js,html,css').toBeTruthy();
    expect(this.component.skin === 'dark').toBeTruthy();
    expect(true).toBeTruthy();
  });

});
