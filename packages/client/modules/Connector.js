
import React from 'react';
import BaseConnector from './BaseConnector';

import combine from '../../common/combine';

export default class extends BaseConnector {
  constructor(...features) {
    super(...features);
    this.route = combine(features, arg => arg.route);
    // console.log('THIS ROUTE:: BAse Constructor', this.route);
  }

  get routes() {
    // console.log('THIS ROUTE::', this.route);
    return this.route.map((route, idx) =>
      React.cloneElement(route, { key: idx + this.route.length })
    );
  }
}
