import type {State} from '../types/state';
import {sortByTop, sortByPriceLowToHigh, sortByPriceHighToLow} from '../utils';

export const selectedOffersByCity = (state: State) => state.offers.filter((offer) => offer.city.name === state.city);

export const selectedOffers = (state: State) => {
  let sortingOffers = selectedOffersByCity(state);

  switch(state.sorting) {
    case 'Popular':
      sortingOffers = selectedOffersByCity(state);
      break;
    case 'Price: low to high':
      sortingOffers = selectedOffersByCity(state).sort(sortByPriceLowToHigh);
      break;
    case 'Price: high to low':
      sortingOffers = selectedOffersByCity(state).sort(sortByPriceHighToLow);
      break;
    case 'Top rated first':
      sortingOffers = selectedOffersByCity(state).sort(sortByTop);
      break;
  }

  return sortingOffers;
};
