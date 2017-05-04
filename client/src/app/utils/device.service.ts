import {Injectable} from '@angular/core';

@Injectable()
export class DeviceService {

  cordova: boolean;

  constructor() {
    document.addEventListener('deviceready', () => {
      console.log('cordova ready');
      this.cordova = true;
    }, false);
  }

  public vibrate(time?: number) {
    if (this.cordova) {
      navigator.vibrate(time || 100);
    }
  }

}
