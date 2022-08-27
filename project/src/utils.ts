import dayjs from 'dayjs';
import {Offer} from './types/offer';
import {Review} from './types/review';
import {AuthorizationStatus} from './const';


export const getRatingPercentage = (item: number) => (item >= 0 && item <= 5) ? Math.round(item) * 20 : 0;
export const sortByPriceLowToHigh = (offerA: Offer, offerB: Offer) => offerA.price - offerB.price;
export const sortByPriceHighToLow = (offerA: Offer, offerB: Offer) => offerB.price - offerA.price;
export const sortByRating = (offerA: Offer, offerB: Offer) => offerB.rating - offerA.rating;

export const isAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Auth;

export const isValidPassword = (password: string) => password
  .toLowerCase()
  .match(
    /[a-zA-Z]+[0-9]|[0-9]+[a-zA-z]/
  );

export const sortByDate = (reviewA: Review, reviewB: Review) => dayjs(reviewB.date).diff(reviewA.date, 'minute');
