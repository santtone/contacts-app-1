import {Directive, HostListener} from '@angular/core';
import {DeviceService} from "./device.service";

@Directive({
  selector: '[caVibration]'
})
export class VibrationDirective {

  constructor(private device: DeviceService) { }

  @HostListener('click', ['$event'])
  onClick() {
    this.device.vibrate();
  }

}
