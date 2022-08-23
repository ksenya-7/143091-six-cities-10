import {createReducer} from '@reduxjs/toolkit';
import {setActiveCity, setOffers, loadOffers, loadFavoriteOffers, loadReviews, setActiveSorting, setDataLoadedStatus, requireAuthorization, setError, setUserData} from './action';
import {Offer} from '../types/offer';
import {Review} from '../types/review';
import {UserData} from '../types/user-data';
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
  userData: UserData | undefined,
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
  userData: undefined,
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
    .addCase(loadFavoriteOffers, (state, action) => {
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
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });

});

export {reducer};
