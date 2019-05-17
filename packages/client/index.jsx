
import * as React from 'react';
import { hydrate, render } from 'react-dom';


import Main from './app/Main';

// const renderFunc = __SSR__ ? hydrate : render;
const root = document.getElementById('react-root');

let frontendReloadCount = 0;

const renderApp = ({ key }) => hydrate(<Main rootTag={root} key={key} />, root);

renderApp({ key: frontendReloadCount });
