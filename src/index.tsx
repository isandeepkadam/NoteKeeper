import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// store
import { store } from './store';
import { Provider } from 'react-redux';
//
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
