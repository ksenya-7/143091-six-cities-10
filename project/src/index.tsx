import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {store} from './store';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {CITY} from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  OFFERS_COUNT: 312,
};

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        offersCount = {Setting.OFFERS_COUNT}
        offers = {offers}
        reviews = {reviews}
        city = {CITY}
      />
    </Provider>
  </React.StrictMode>,
);
