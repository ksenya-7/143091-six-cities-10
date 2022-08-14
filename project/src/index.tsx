import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {store} from './store';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {CITY, CITIES} from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        offers = {offers}
        reviews = {reviews}
        city = {CITY}
        cities = {CITIES}
      />
    </Provider>
  </React.StrictMode>,
);
