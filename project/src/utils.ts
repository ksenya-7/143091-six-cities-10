import {Offer} from './types/offer';

export const getRatingPercentage = (item: number) => (item >= 0 && item <= 5) ? Math.round(item) * 20 : 0;

export const sortByPriceLowToHigh = (offerA: Offer, offerB: Offer) => offerA.price - offerB.price;

export const sortByPriceHighToLow = (offerA: Offer, offerB: Offer) => offerB.price - offerA.price;

export const sortByRating = (offerA: Offer, offerB: Offer) => offerB.rating - offerA.rating;
