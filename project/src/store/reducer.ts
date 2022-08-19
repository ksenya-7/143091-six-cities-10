import {createReducer} from '@reduxjs/toolkit';
import {setActiveCity, setOffers, loadOffers, setActiveSorting, setDataLoadedStatus} from './action';
import {Offer} from '../types/offer';
import {ACTIVE_CITY, ACTIVE_SORTING} from '../const';

type InitalState = {
  city: string,
  offers: Offer[],
  isDataLoaded: boolean,
  sorting: string,
}

const initialState: InitalState = {
  city: ACTIVE_CITY,
  offers: [],
  isDataLoaded: true,
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
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});

export {reducer};
