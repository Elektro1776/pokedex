import React from 'react';
import PropTypes from 'prop-types';
// import Search from 'module';
const PageLayout = ({ children }) => {
  return <div className="main">{children}</div>;
};

PageLayout.propTypes = {
  children: PropTypes.node
};

export default PageLayout;
