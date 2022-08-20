import {createReducer} from '@reduxjs/toolkit';
import {setActiveCity, setOffers, loadOffers, setActiveSorting, setDataLoadedStatus} from './action';
import {Offer} from '../types/offer';
import {ACTIVE_CITY, SortingType} from '../const';

type InitialState = {
  city: string,
  offers: Offer[],
  isDataLoaded: boolean,
  sorting: SortingType,
}

const initialState: InitialState = {
  city: ACTIVE_CITY,
  offers: [],
  isDataLoaded: true,
  sorting: SortingType.Popular,
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
