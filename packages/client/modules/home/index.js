import React from 'react';
import { Route } from 'react-router-dom';
// import Home from './containers/Home';
import UniversalComponent from '../Universal';
import Feature from '../Connector';
import reducers from './reducers';
// const Home = <UniversalComponent page={props => import('./containers/Home')} />;
export default new Feature({
  route: [<Route path='/'><UniversalComponent page={props => import('./containers/Home')} /></Route>],
  reducer: { home: reducers }
})
