import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {fetchOffersAction, fetchOfferByIdAction, fetchOffersNearbyAction, fetchFavoriteOffersAction} from '../api-actions';
import {Offer} from '../../types/offer';


type OfferProcess = {
  offers: Offer[],
  favoriteOffers: Offer[],
  offerById: Offer | undefined,
  offersNearby: Offer[],
  isDataLoaded: boolean,
};

const initialState: OfferProcess = {
  offers: [],
  favoriteOffers: [],
  offerById: undefined,
  offersNearby: [],
  isDataLoaded: false,
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoaded = true;
      })
      .addCase(fetchOfferByIdAction.pending, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(fetchOfferByIdAction.fulfilled, (state, action) => {
        state.offerById = action.payload;
        state.isDataLoaded = true;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isDataLoaded = true;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      });
  }
});
