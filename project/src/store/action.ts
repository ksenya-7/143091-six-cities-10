import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';

export const setActiveCity = createAction<string>('offers/setActiveCity');

export const setActiveSorting = createAction<string>('offers/setActiveSorting');

export const setOffers = createAction<Offer[]>('offers/setOffers');
