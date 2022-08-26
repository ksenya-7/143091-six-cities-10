import {createSlice} from '@reduxjs/toolkit';
import {fetchReviewsAction, postReviewAction} from '../api-actions';
import {DataProcess} from '../../types/state';
import {NameSpace, ACTIVE_CITY, SortingType} from '../../const';


const initialState: DataProcess = {
  city: ACTIVE_CITY,
  sorting: SortingType.Popular,
  reviews: [],
  error: null,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setActiveCity: (state, action) => {
      state.city = action.payload;
    },
    setActiveSorting: (state, action) => {
      state.sorting = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
});

export const {setActiveCity, setActiveSorting, setError} = dataProcess.actions;
