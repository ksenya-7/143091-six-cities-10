import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {store} from './store';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {cityObjects, ACTIVE_CITY} from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        offers = {offers}
        reviews = {reviews}
        cities = {cityObjects}
        activeCity = {ACTIVE_CITY}
      />
    </Provider>
  </React.StrictMode>,
);
