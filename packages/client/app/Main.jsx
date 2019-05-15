import { hot } from 'react-hot-loader';

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

// function render(Component) {
//   return ReactDOM.hydrate(<Router>{Component}</Router>, document.getElementById('react-root'));
// }

// render(Routes);

class Main extends Component {
  render() {
    return <Router>{Routes}</Router>;
  }
}

export default hot(module)(Main);
