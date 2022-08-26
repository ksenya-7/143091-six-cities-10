import {store} from '../store/index';
import {AuthorizationStatus, SortingType} from '../const';
import {UserData} from '../types/user-data';
import {Offer} from '../types/offer';
import type {Review} from '../types/review';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  userData: UserData | undefined,
};

export type OfferProcess = {
  offers: Offer[],
  favoriteOffers: Offer[],
  offerById: Offer | undefined,
  offersNearby: Offer[],
  isDataLoaded: boolean,
};

export type DataProcess = {
  city: string,
  sorting: SortingType,
  reviews: Review[],
  error: string | null,
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
