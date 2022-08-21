import {createReducer} from '@reduxjs/toolkit';
import {setActiveCity, setOffers, loadOffers, loadFavorite, loadReviews, setActiveSorting, setDataLoadedStatus, requireAuthorization, setError} from './action';
import {Offer} from '../types/offer';
import {Review} from '../types/review';
import {ACTIVE_CITY, SortingType, AuthorizationStatus} from '../const';

type InitialState = {
  city: string,
  offers: Offer[],
  favorite: Offer[],
  reviews: Review[],
  isDataLoaded: boolean,
  sorting: SortingType,
  authorizationStatus: AuthorizationStatus,
  error: string | null,
}

const initialState: InitialState = {
  city: ACTIVE_CITY,
  offers: [],
  favorite: [],
  reviews: [],
  isDataLoaded: false,
  sorting: SortingType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
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
    .addCase(loadFavorite, (state, action) => {
      state.favorite = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
