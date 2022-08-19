import {createReducer} from '@reduxjs/toolkit';
import {setActiveCity, setOffers, setActiveSorting} from './action';
import {offers} from '../mocks/offers';
import {ACTIVE_CITY, ACTIVE_SORTING} from '../const';

const initialState = {
  city: ACTIVE_CITY,
  offers: offers,
  sorting: ACTIVE_SORTING,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setActiveSorting, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
