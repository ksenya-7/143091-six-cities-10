import {createReducer} from '@reduxjs/toolkit';
import {setActiveCity, setOffers, loadOffers, setDataLoadedStatus} from './action';
import {Offer} from '../types/offer';
import {ACTIVE_CITY} from '../const';

type InitalState = {
  city: string,
  offers: Offer[],
  isDataLoaded: boolean,
}

const initialState: InitalState = {
  city: ACTIVE_CITY,
  offers: [],
  isDataLoaded: true,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});

export {reducer};
