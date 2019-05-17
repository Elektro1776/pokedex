import { hot } from "react-hot-loader/root";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import createReduxStore, { storeReducer } from '../../common/createReduxStore';

// function render(Component) {
//   return ReactDOM.hydrate(<Router>{Component}</Router>, document.getElementById('react-root'));
// }

// render(Routes);
let store;
if (module.hot && module.hot.data && module.hot.data.store) {
  store = module.hot.data.store;
  store.replaceReducer(storeReducer);
} else {
  store = createReduxStore({});
}

if (module.hot) {
  module.hot.dispose(data => {
    data.store = store;
    delete window.__STORE_STATE__;
  });
}
class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>{Routes}</Router>
      </Provider>
    );
  }
}

export default hot(Main);
