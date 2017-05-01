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
}

export class ToolbarProperties {
  title: string;
  submitAction: any;
  backEnabled: boolean;
  hidden: boolean;

  constructor(title?: string, submitAction?: any, backEnabled?: boolean, hidden?: boolean) {
    this.title = title;
    this.submitAction = submitAction;
    this.backEnabled = backEnabled;
    this.hidden = hidden;
  }
}
