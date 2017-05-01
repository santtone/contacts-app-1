import {Component, OnInit, ViewChild} from '@angular/core';
import {Location} from '@angular/common';
import {NavigationEnd, Router} from "@angular/router";
import * as _ from 'lodash';
import {MdSidenav} from "@angular/material";
import {MediaChange, ObservableMedia} from "@angular/flex-layout";
import {ToolbarProperties, ToolbarService} from "./utils/toolbar.service";

@Component({
  selector: 'ca-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  toolbarProperties: ToolbarProperties;
  toolbarDisabled: boolean;
  sidenavMode: string;

  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(private router: Router, private media: ObservableMedia,
              private toolbar: ToolbarService, private location: Location) {
    this.toolbarDisabled = false;
    this.sidenavMode = 'over';
    this.toolbarProperties = toolbar.defaultProperties;
  }

  ngOnInit(): void {
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
    this.media.subscribe((change: MediaChange) => {
      this.sidenavMode = (change.mqAlias == 'xs') || (change.mqAlias == 'sm') ? 'over' : 'side';
    });
    this.toolbar.propertiesChanged.subscribe((properties: ToolbarProperties) => {
      this.toolbarProperties = properties;
    });
  }

  toggle() {
    this.sidenav.toggle(!this.sidenav._isOpened);
  }

  navigateBack(){
    this.location.back();
  }
}
