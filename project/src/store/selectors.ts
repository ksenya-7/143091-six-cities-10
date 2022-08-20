import type {State} from '../types/state';
import {sortByRating, sortByPriceLowToHigh, sortByPriceHighToLow} from '../utils';
import {SortingType} from '../const';

export const selectOffersByCity = (state: State) => state.offers.filter((offer) => offer.city.name === state.city);

const sortings = {
  [SortingType.PriceToHigh]: sortByPriceLowToHigh,
  [SortingType.PriceToLow]: sortByPriceHighToLow,
  [SortingType.RatingFirst]: sortByRating,
};

export const selectOffers = (state: State) => (
  state.sorting === SortingType.Popular ?
    selectOffersByCity(state) :
    selectOffersByCity(state).sort(sortings[state.sorting])
);
