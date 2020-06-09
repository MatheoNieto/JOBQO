import React from 'react';
import ReactDOM from 'react-dom';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from './routes/App';
import { store, persistor } from './store';

import Loading from './components/Loading';

ReactDOM.render(
  <Provider
    store={store}
  >
    <PersistGate
      loading={<Loading />}
      persistor={persistor}
    >
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('app'),
);
