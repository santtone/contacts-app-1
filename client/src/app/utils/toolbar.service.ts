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
    this.propertiesChanged.next(this.properties);
  }

  disableSubmit(disabled: boolean){
    this.properties.submitDisabled = disabled;
  }
}

export class ToolbarProperties {
  title: string;
  submitAction: any;
  submitDisabled: boolean;
  backEnabled: boolean;
  hidden: boolean;

  constructor(title?: string, submitAction?: any, submitDisabled?: boolean, backEnabled?: boolean, hidden?: boolean) {
    this.title = title;
    this.submitAction = submitAction;
    this.submitDisabled = submitDisabled;
    this.backEnabled = backEnabled;
    this.hidden = hidden;
  }
}
