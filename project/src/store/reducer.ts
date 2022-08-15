import {createReducer} from '@reduxjs/toolkit';
import {setActiveCity, setOffers} from './action';
import {offers} from '../mocks/offers';
import {ACTIVE_CITY} from '../const';

const initialState = {
  city: ACTIVE_CITY,
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      // console.log(action.payload);
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
