import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

/**
 * NgFiddleService class.
 */
@Injectable()
export class NgFiddleService {
  public static getFiddleSrc(url: string, tabs: string, skin: string): string {
    if(skin === ''){
      skin = 'light';
    }
    return `${url}/embedded/${tabs}/${skin}/`;
  }
}
