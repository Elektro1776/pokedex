/* eslint-disable import/no-extraneous-dependencies */

require('@babel/register')({ presets: ['@babel/env'], rootMode: 'upward' });
require('@babel/polyfill');

require('./app');
