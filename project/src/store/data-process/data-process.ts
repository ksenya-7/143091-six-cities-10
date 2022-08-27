import {createAction, createSlice} from '@reduxjs/toolkit';
import {fetchReviewsAction, postReviewAction} from '../api-actions';
import type {Review} from '../../types/review';
import {NameSpace, ACTIVE_CITY, SortingType} from '../../const';


type DataProcess = {
  city: string,
  sorting: SortingType,
  reviews: Review[],
  error: string | null,
};

const initialState: DataProcess = {
  city: ACTIVE_CITY,
  sorting: SortingType.Popular,
  reviews: [],
  error: null,
};

export const setActiveCity = createAction<string>('data/setActiveCity');
export const setActiveSorting = createAction<SortingType>('data/setActiveSorting');
export const setError = createAction<string | null>('data/setError');

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setActiveCity, (state, action) => {
        state.city = action.payload;
      })
      .addCase(setActiveSorting, (state, action) => {
        state.sorting = action.payload;
      })
      .addCase(setError, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
});
