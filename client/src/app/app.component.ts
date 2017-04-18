import {Component, HostListener, NgZone, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import * as _ from 'lodash';

@Component({
  selector: 'ca-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  toolbarDisabled: boolean;
  sidenavMode: string;

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    let width = event ? event.target.innerWidth : window.innerWidth;
    this.sidenavMode = width >= 600 ? 'side' : 'over';
  }

  constructor(private router: Router, private ngZone: NgZone) {
    this.toolbarDisabled = false;
    this.sidenavMode = 'over'
  }

  ngOnInit(): void {
    this.onWindowResize(null);
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          if (_.isEqual(event.urlAfterRedirects, '/') || _.isEqual(event.urlAfterRedirects, '/login')) {
            this.toolbarDisabled = true;
            return;
          }
          this.toolbarDisabled = false;
        }
      });
  }
}
