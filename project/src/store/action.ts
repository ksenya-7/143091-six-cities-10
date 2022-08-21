import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {Review} from '../types/review';
import {AppRoute, SortingType, AuthorizationStatus} from '../const';

export const setActiveCity = createAction<string>('offers/setActiveCity');

export const setActiveSorting = createAction<SortingType>('offers/setActiveSorting');

export const setOffers = createAction<Offer[]>('offers/setOffers');

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const loadFavorite = createAction<Offer[]>('data/loadFavorite');

export const loadReviews = createAction<Review[]>('data/loadReviews');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('data/setError');

export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');
