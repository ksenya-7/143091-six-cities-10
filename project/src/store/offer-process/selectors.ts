import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';
import {sortByRating, sortByPriceLowToHigh, sortByPriceHighToLow} from '../../utils';
import {SortingType} from '../../const';


export const getOffers = (state: State): Offer[] => state[NameSpace.Offer].offers;

export const getDataLoaded = (state: State): boolean => state[NameSpace.Offer].isDataLoaded;

export const getActiveOffer = (state: State): Offer | undefined => state[NameSpace.Offer].offerById;

export const getOffersNearby = (state: State): Offer[] => state[NameSpace.Offer].offersNearby;

export const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.Offer].favoriteOffers;

export const selectOffersByCity = (state: State) => state[NameSpace.Offer].offers.filter((offer) => offer.city.name === state[NameSpace.Data].city);

const sortings = {
  [SortingType.PriceToHigh]: sortByPriceLowToHigh,
  [SortingType.PriceToLow]: sortByPriceHighToLow,
  [SortingType.RatingFirst]: sortByRating,
};

export const selectOffers = (state: State) => (
  // state[NameSpace.Data].sorting === SortingType.Popular ?
  //   selectOffersByCity(state) :
  //   selectOffersByCity(state).sort(sortings[state[NameSpace.Data].sorting])

  selectOffersByCity(state)
);
