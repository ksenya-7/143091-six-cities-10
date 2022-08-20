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

// {
//   let sortingOffers = selectOffersByCity(state);
//   switch(state.sorting) {
//     case SortingType.Popular:
//       sortingOffers = selectOffersByCity(state);
//       break;
//     case SortingType.PriceToHigh:
//       sortingOffers = selectOffersByCity(state).sort(sortByPriceLowToHigh);
//       break;
//     case SortingType.PriceToLow:
//       sortingOffers = selectOffersByCity(state).sort(sortByPriceHighToLow);
//       break;
//     case SortingType.RatingFirst:
//       sortingOffers = selectOffersByCity(state).sort(sortByRating);
//       break;
//   }

//   return sortingOffers;
// };
