// import React from 'react';
import { merge } from 'ramda';
import combine from '../../common/combine';

export default class BaseConnector {
    constructor(...features) {
      // console.log('FEATURES::: IN BASE:::', features);
       this.reducer = combine(features, arg => arg.reducer);
       this.routerFactory = combine(features, arg => arg.routerFactory)
      .slice(-1)
      .pop();
      // console.log('THIS ROUTE:: Constructor', this.routerFactory);
    }

    get router() {
      return this.routerFactory();
  }
    get reducers() {
      return merge({}, ...this.reducer)
    }
}
