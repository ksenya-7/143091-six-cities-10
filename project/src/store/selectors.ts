import type {State} from '../types/state';
import {sortByTop, sortByPriceLowToHigh, sortByPriceHighToLow} from '../utils';
import {Sorting} from '../const';

export const selectOffersByCity = (state: State) => state.offers.filter((offer) => offer.city.name === state.city);

export const selectOffers = (state: State) => {
  let sortingOffers = selectOffersByCity(state);

  switch(state.sorting) {
    case Sorting.Popular:
      sortingOffers = selectOffersByCity(state);
      break;
    case Sorting.PriceToHigh:
      sortingOffers = selectOffersByCity(state).sort(sortByPriceLowToHigh);
      break;
    case Sorting.PriceToLow:
      sortingOffers = selectOffersByCity(state).sort(sortByPriceHighToLow);
      break;
    case Sorting.TopFirst:
      sortingOffers = selectOffersByCity(state).sort(sortByTop);
      break;
  }

  return sortingOffers;
};
