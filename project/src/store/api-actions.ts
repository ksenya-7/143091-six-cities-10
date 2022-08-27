import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch} from '../types/state.js';
import {Offer} from '../types/offer';
import {Review, ReviewAddParams} from '../types/review';
import {redirectToRoute} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AppRoute} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';


export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);

    return data;
  },
);

export const fetchOfferByIdAction = createAsyncThunk<Offer, string, {
  extra: AxiosInstance
}>(
  'data/fetchOfferById',
  async (hotelId, {extra: api}) => {
    const {data} = await api.get<Offer>(APIRoute.OfferById.replace(':id', hotelId));

    return data;
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk<Offer[], undefined, {
  extra: AxiosInstance
}>(
  'data/fetchFavorite',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Favorite);

    return data;
  },
);

export const fetchOffersNearbyAction = createAsyncThunk<Offer[], string, {
  extra: AxiosInstance
}>(
  'data/fetchNearbyOffers',
  async (hotelId, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Nearby.replace(':id', hotelId));

    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<Review[], string, {
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (hotelId, {extra: api}) => {
    const {data} = await api.get<Review[]>(APIRoute.Reviews.replace(':id', hotelId));

    return data;
  },
);

export const postReviewAction = createAsyncThunk<Review[], ReviewAddParams, {
  extra: AxiosInstance
}>(
  'data/PostReview',
  async ({comment, rating, hotelId}, {extra: api}) => {
    await api.post<ReviewAddParams>(APIRoute.NewReview.replace(':id', hotelId), {comment, rating});
    const {data} = await api.get<Review[]>(APIRoute.Reviews.replace(':id', hotelId));

    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data: userData} = await api.get<UserData>(APIRoute.Login);
    return userData;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: userData} = await api.post<UserData>(APIRoute.Login, {email, password});

    saveToken(userData.token);
    dispatch(redirectToRoute(AppRoute.Root));
    return userData;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
