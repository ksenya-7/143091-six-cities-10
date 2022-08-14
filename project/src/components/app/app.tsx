import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../../pages/main/main';
import FavoritesScreen from '../../pages/favorites/favorites';
import LoginScreen from '../../pages/login/login';
import RoomScreen from '../../pages/offer/offer';
import NotFoundScreen from '../../pages/error/error';
import PrivateRoute from '../private-route/private-route';
import {Offer, City} from '../../types/offer';
import {Review} from '../../types/review';


type AppScreenProps = {
  offers: Offer[];
  reviews: Review[];
  cities: City[];
  activeCity: string;
}

function App({offers, reviews, cities, activeCity}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainScreen
              cities = {cities}
              offers = {offers}
              activeCity = {activeCity}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesScreen offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<RoomScreen activeCity = {activeCity} offers={offers} reviews={reviews} cities={cities}/>}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
