import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {fetchOffersAction, fetchOfferByIdAction, fetchOffersNearbyAction, fetchFavoriteOffersAction, toggleFavoriteStatusOfferAction} from '../api-actions';
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
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isDataLoaded = true;
      })
      .addCase(fetchOffersNearbyAction.pending, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
        state.isDataLoaded = true;
      })
      .addCase(toggleFavoriteStatusOfferAction.pending, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(toggleFavoriteStatusOfferAction.fulfilled, (state, action) => {
        const offer = state.offers.find((item) => item.id === action.payload.id);
        if (offer) {
          offer.isFavorite = action.payload.isFavorite;
        }
        action.payload.isFavorite ?
          state.favoriteOffers.push(action.payload) :
          state.favoriteOffers = state.favoriteOffers.filter((item) => item.id !== action.payload.id);
        if (state.offerById && state.offerById.id === action.payload.id) {
          state.offerById = action.payload;
        }
        const offerNearby = state.offersNearby.find((item) => item.id === action.payload.id);
        if (offerNearby) {
          offerNearby.isFavorite = action.payload.isFavorite;
        }
        state.isDataLoaded = true;
      });
  }
});
