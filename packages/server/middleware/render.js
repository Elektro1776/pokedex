import React from 'react';

import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import createReduxStore from '../../common/createReduxStore';

import Html from './html';
import Routes from '../../client/app/Routes';

export default ({ clientStats }) => (req, res) => {
  // console.log('routes::::::: in server', Routes);
  // const context = {
  //   site: req.hostname.split('.')[0]
  // };
  const context = {};
  let initialState = {};
  const store = createReduxStore(initialState);
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.originalUrl} context={context}>
        {Routes}
      </StaticRouter>
    </Provider>
  );
  const chunkNames = flushChunkNames();
  const { scripts, stylesheets } = flushChunks(clientStats, {
    chunkNames
  });

  const page = <Html content={html} js={scripts} css={stylesheets} state={store} />;
  res.send(`<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(page)}`);
  res.end();
};
