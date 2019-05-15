import React from 'react';
import { Switch } from 'react-router-dom';

import modules from '..';

import Feature from '../Connector';
// console.log('MODULES IN ROUTER:::', modules);
const routerFactory = () => <Switch>{modules.routes}</Switch>;

export default new Feature({
  routerFactory
});
