import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {SortingType} from '../../const';
import type {Review} from '../../types/review';


export const getActiveCity = (state: State): string => state[NameSpace.Data].city;
export const getActiveSorting = (state: State): SortingType => state[NameSpace.Data].sorting;
export const getReviews = (state: State): Review[] => state[NameSpace.Data].reviews;
export const getErrorMessage = (state: State): string | null | undefined => state[NameSpace.Data].error;
