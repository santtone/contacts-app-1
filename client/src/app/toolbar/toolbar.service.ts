import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import * as _ from 'lodash';

@Injectable()
export class ToolbarService {

  properties: ToolbarProperties;
  propertiesChanged: Subject<ToolbarProperties>;

  defaultProperties: ToolbarProperties;

  constructor() {
    this.propertiesChanged = new Subject<ToolbarProperties>();
    this.defaultProperties = new ToolbarProperties();
    this.properties = this.defaultProperties;
  }

  create(properties) {
    this.properties = _.assign(this.defaultProperties, properties);
    this.changed();
  }

  disableSubmit(disabled: boolean) {
    this.properties.submitDisabled = disabled;
  }

  changed(){
    this.propertiesChanged.next(this.properties);
  }
}

export class ToolbarProperties {
  title: string;
  submitAction: any;
  submitDisabled: boolean;
  backEnabled: boolean;
  searchEnabled: boolean;
  searchText: string;
  hidden: boolean;

  constructor(options?: any) {
    options = options ? options : {};
    this.title = options.title;
    this.submitAction = options.submitAction;
    this.submitDisabled = options.submitDisabled;
    this.backEnabled = options.backEnabled;
    this.searchEnabled = options.searchEnabled;
    this.searchText = options.searchText;
    this.hidden = options.hidden;
  }
}
