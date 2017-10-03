import { Component, Input, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgFiddleService } from '../../services';

@Component({
  selector: 'ng-fiddle',
  styleUrls: ['./ng-fiddle.component.scss'],
  templateUrl: './ng-fiddle.component.html',
})
/**
 * NgFiddleComponent
 */
export class NgFiddleComponent implements AfterViewInit, AfterViewChecked {

  /**
   * url
   */
  @Input() public url: string = '';

  /**
   * tabs
   */
  @Input() public tabs: string = '';

  /**
   * skin
   */
  @Input() public skin: string = '';

  private iFrameUrl: string;

  constructor(private cdRef: ChangeDetectorRef) {}

  public ngAfterViewInit() {
    this.iFrameUrl = NgFiddleService.getFiddleSrc(this.url, this.tabs, this.skin);
  }

  public ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
}
