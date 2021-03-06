import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import store from './store';
import Routes from './routes';
import history from './services/history';
import GloblaStyles from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GloblaStyles />
      </Router>
    </Provider>
  );
}

export default App;
