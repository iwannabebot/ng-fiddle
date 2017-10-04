import { Component, Input, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgFiddleService } from '../../services';

@Component({
  selector: 'ng-fiddle',
  styleUrls: ['./ng-fiddle.component.scss'],
  templateUrl: './ng-fiddle.component.html'
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

  private iFrameUrl: any;

  constructor(private cdRef: ChangeDetectorRef, private sanitizer: DomSanitizer) {}

  public ngAfterViewInit() {
    const tempUrl = NgFiddleService.getFiddleSrc(this.url, this.tabs, this.skin);
    this.iFrameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(tempUrl);
  }

  public ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
}
