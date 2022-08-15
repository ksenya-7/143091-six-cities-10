import type {State} from '../types/state';

export const selectedOffersByCity = (state: State) => state.offers.filter((offer) => offer.city.name === state.city);
