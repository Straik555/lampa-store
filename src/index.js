import React from "react";
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import {ThemeProvider} from "styled-components";

import reducer from './reducers';
import routes from "./routes";
import theme from "./styles/theme";
import ErrorBoundre from './components/ErrorBoundry';
import './styles/main.scss';

const localStorageMiddleware = ({getState}) => {

    return (next) => (action) => {
        const result = next(action);
        localStorage.setItem('token', JSON.stringify(
            getState()
        ));
        return result;
    };
};

const reHydrateStore = () => {

    if (localStorage.getItem('token') !== null) {
        return JSON.parse(localStorage.getItem('token'))
    }
}

const store = createStore(reducer, reHydrateStore(), applyMiddleware(thunk, localStorageMiddleware));

ReactDOM.render(
  <Provider store={store}>
      <ErrorBoundre>
          <ThemeProvider theme={theme}>
              {routes}
          </ThemeProvider>
      </ErrorBoundre>
  </Provider>,
  document.getElementById('root')
);

