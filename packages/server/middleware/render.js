import React from 'react';

import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
// import { flushChunkNames } from 'react-universal-component/server';
// import flushChunks from 'webpack-flush-chunks';
// import * as Routers from 'react-router-dom';
// console.log('ROUTERSSS::', Routers);
// import { flushChunkNames } from 'react-universal-component/server';
// import flushChunks from 'webpack-flush-chunks';
// import Routes from '../../client/components/Routes';
// import Routes from '../../client/app/Routes';
import Html from './html';
import Routes from '../../client/app/Routes';

export default ({ clientStats }) => (req, res) => {
  // console.log('routes::::::: in server', Routes);
  // const context = {
  //   site: req.hostname.split('.')[0]
  // };
  const context = {};
  // const Test = (
  //   <StaticRouter location={req.originalUrl} context={context}>
  //     {/* <Routes /> */}
  //     {Routes}
  //   </StaticRouter>
  // );
  // const Other = Routes;
  // console.log('Other TEst:::', <Routes />);

  const app = (
    <StaticRouter location={req.originalUrl} context={context}>
      {Routes}
      {/* {Routes} */}
    </StaticRouter>
  );

  const html = ReactDOMServer.renderToString(app);
  // const chunkNames = flushChunkNames();
  //
  // const { js } = flushChunks(clientStats, {
  //   chunkNames
  // });
  // console.log('JS:::', js.toString());
  // console.log('HTML::', html);
  // console.log('APP::', renderToStaticMarkup(app));
  // const chunkNames = flushChunkNames();
  // const { js, styles, cssHash } = flushChunks(clientStats, {
  //   chunkNames
  // });
  const page = <Html content={html} />;
  // console.log('PAGE:::', page);
  res.send(`<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(page)}`);
  res.end();
};
