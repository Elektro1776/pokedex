import React from 'react';
import PropTypes from 'prop-types';

const Html = ({ state, content, js, css }) => {
  // console.log('JS:::', );
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        {css.map((sheet, idx) => {
          return <link key={idx} rel="stylesheet" type="text/css" href={`./${sheet}`} />;
        })}
      </head>
      <body>
        <div id="react-root" dangerouslySetInnerHTML={{ __html: content || '' }} />
        {js.map((script, idx) => {
          return <script key={idx} src={`./${script}`} charSet="utf-8" />;
        })}
      </body>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__STORE_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}`
        }}
        charSet="UTF-8"
      />
    </html>
  );
};

Html.propTypes = {
  state: PropTypes.object,
  content: PropTypes.string,
  js: PropTypes.array,
  css: PropTypes.array
};

export default Html;
