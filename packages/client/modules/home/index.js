import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home';

import Feature from '../Connector';

export default new Feature({
  route: [<Route path='/' component={Home} />]
})
