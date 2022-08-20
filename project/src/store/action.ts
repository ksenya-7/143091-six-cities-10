import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {SortingType} from '../const';

export const setActiveCity = createAction<string>('offers/setActiveCity');

export const setActiveSorting = createAction<SortingType>('offers/setActiveSorting');

export const setOffers = createAction<Offer[]>('offers/setOffers');

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
