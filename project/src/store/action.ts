import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';

export const setActiveCity = createAction<string>('offers/setActiveCity');

export const setOffers = createAction<Offer[]>('offers/setOffers');
