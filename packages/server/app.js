import express from 'express';
import webpack from 'webpack';

import configDevClient from '../../webpack/webpack.dev-client';
import configDevServer from '../../webpack/webpack.dev-server';
// import clientConfigProd from '../../webpack/webpack.prod-client';
// import serverConfigProd from '../../webpack/webpack.prod-server';

const app = express();
const port = process.env.PORT || 8080;
const isProd = process.env.NODE_ENV === 'production';

const isDev = !isProd;
let isBuilt = false;

const done = () =>
  !isBuilt &&
  app.listen(port, () => {
    isBuilt = true;
    console.log(`BUILD COMPLETE -- Listening @ http://localhost:${port}`);
  });
// console.log('IS DEV::', isDev);
if (isDev) {
  const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

  const compiler = webpack([configDevClient, configDevServer]);

  const clientCompiler = compiler.compilers[0];
  // console.log('CCLIENT COMPILER::', clientCompiler);
  // console.log('SERVER COMPILER::', compiler.compilers[1]);
  const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, configDevClient.devServer);

  const webpackHotMiddlware = require('webpack-hot-middleware')(clientCompiler, configDevClient.devServer);

  app.use(webpackDevMiddleware);
  app.use(webpackHotMiddlware);
  app.use(webpackHotServerMiddleware(compiler));
  // console.log('MIDDLEWARE ENABLED');
  webpackDevMiddleware.waitUntilValid(done);
}
export default app;
