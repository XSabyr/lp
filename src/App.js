import React from 'react';

import WebSite from './components/WebSite';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  { user: {}, section: {} },
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

const App = ({ userEmail }) => {
  return (
    <Provider store={store}>
      <WebSite />
    </Provider>
  );
};

export default App;
