import React from 'react';
import PropTypes from 'prop-types';

const Html = ({ content }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body>
        <div id="react-root" dangerouslySetInnerHTML={{ __html: content || '' }} />

        <script src="main-bundle.js" />
        <script src="vendor-bundle.js" />
      </body>
    </html>
  );
};

Html.propTypes = {
  content: PropTypes.string
};

export default Html;
