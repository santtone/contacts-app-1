import {
  AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, QueryList, ViewChild, ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {Location} from '@angular/common';
import {ToolbarProperties, ToolbarService} from "../utils/toolbar.service";

@Component({
  selector: 'ca-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, AfterViewInit {

  @Output() toggleSidenav: EventEmitter<any>;
  toolbarProperties: ToolbarProperties;
  searchActivated: boolean;

  @ViewChildren('search') search: QueryList<any>;

  constructor(private toolbar: ToolbarService, private location: Location) {
    this.toggleSidenav = new EventEmitter();
    this.toolbarProperties = toolbar.defaultProperties;
    this.searchActivated = false;
  }

  ngOnInit() {
    this.toolbar.propertiesChanged.subscribe((properties: ToolbarProperties) => {
      this.toolbarProperties = properties;
    });
  }

  ngAfterViewInit(): void {
    this.search.changes.subscribe(query => {
      let searchInput: ElementRef = query.first;
      if(searchInput){
        setTimeout(function(){
          searchInput.nativeElement.focus();
        });
      }
    })
  }

  toggleSearch(){
    this.searchActivated = !this.searchActivated;
  }

  navigateBack() {
    this.location.back();
  }

  searchTextChanged() {
    this.toolbar.changed();
  }

}
