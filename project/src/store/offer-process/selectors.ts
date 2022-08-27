import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';
import {sortByRating, sortByPriceLowToHigh, sortByPriceHighToLow} from '../../utils';
import {SortingType} from '../../const';


export const getDataLoaded = (state: State): boolean => state[NameSpace.Offer].isDataLoaded;

export const getActiveOffer = (state: State): Offer | undefined => state[NameSpace.Offer].offerById;

export const getOffersNearby = (state: State): Offer[] => state[NameSpace.Offer].offersNearby;

export const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.Offer].favoriteOffers;

export const selectOffersByCity = (state: State): Offer[] => state[NameSpace.Offer].offers.filter((offer) => offer.city.name === state[NameSpace.Data].city);

export const selectOffers = (state: State) => {
  switch(state[NameSpace.Data].sorting) {
    case SortingType.Popular:
      return selectOffersByCity(state);
    case SortingType.PriceToHigh:
      return selectOffersByCity(state).sort(sortByPriceLowToHigh);
    case SortingType.PriceToLow:
      return selectOffersByCity(state).sort(sortByPriceHighToLow);
    case SortingType.RatingFirst:
      return selectOffersByCity(state).sort(sortByRating);
  }
};

// export const selectSorting = (state: State) => state[NameSpace.Data].sorting;
// export const selectCity = (state: State) => state[NameSpace.Data].city;
// export const selectAllOffers = (state: State) => state[NameSpace.Offer].offers;

// export const selectCityOffers = createSelector(
//   selectCity,
//   selectAllOffers,
//   (city, offers) => offers.filter((offer) => offer.city.name === city)
// );

// const sortings = {
//   [SortingType.PriceToHigh]: sortByPriceLowToHigh,
//   [SortingType.PriceToLow]: sortByPriceHighToLow,
//   [SortingType.RatingFirst]: sortByRating,
// };

// export const selectOffers = createSelector(
//   selectSorting,
//   selectCityOffers,
//   (sorting, offers) => (sorting === SortingType.Popular ? offers : offers.sort(sortings[sorting]))
// );
