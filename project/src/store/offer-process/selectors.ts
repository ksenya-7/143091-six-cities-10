import {createSelector} from '@reduxjs/toolkit';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';
import {sortByRating, sortByPriceLowToHigh, sortByPriceHighToLow} from '../../utils';
import {NameSpace, SortingType} from '../../const';


export const getDataLoaded = (state: State): boolean => state[NameSpace.Offer].isDataLoaded;
export const getActiveOffer = (state: State): Offer | undefined => state[NameSpace.Offer].offerById;
export const getOffersNearby = (state: State): Offer[] => state[NameSpace.Offer].offersNearby;
export const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.Offer].favoriteOffers;
export const selectSorting = (state: State) => state[NameSpace.Data].sorting;
export const selectCity = (state: State) => state[NameSpace.Data].city;
export const selectAllOffers = (state: State) => state[NameSpace.Offer].offers;

export const selectOffersNearby = createSelector(
  getActiveOffer,
  getOffersNearby,
  (offer, offers) => offer ? [offer, ...offers] : offer
);

export const selectOffersByCity = createSelector(
  selectCity,
  selectAllOffers,
  (city, offers) => offers.filter((offer) => offer.city.name === city)
);

const sortings = {
  [SortingType.PriceToHigh.toString()]: sortByPriceLowToHigh,
  [SortingType.PriceToLow.toString()]: sortByPriceHighToLow,
  [SortingType.RatingFirst.toString()]: sortByRating,
};

export const selectOffers = createSelector(
  selectSorting,
  selectOffersByCity,
  (sorting, offers) => (sorting === SortingType.Popular ? offers : offers.sort(sortings[sorting]))
);
