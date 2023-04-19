import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { setupStore } from './utils/store';
import App from './App';

export function render({ url }) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Provider store={setupStore()}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>
  );
  return { html };
}
