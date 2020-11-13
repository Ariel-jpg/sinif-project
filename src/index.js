import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { Provider } from 'react-redux';
import configureStore from './Components/Store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore().store}>
      <PersistGate loading={null} persistor={configureStore().persistor}>
        <App />
      </PersistGate>
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);