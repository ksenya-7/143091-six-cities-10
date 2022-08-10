import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../../pages/main/main';
import FavoritesScreen from '../../pages/favorites/favorites';
import LoginScreen from '../../pages/login/login';
import RoomScreen from '../../pages/offer/offer';
import NotFoundScreen from '../../pages/error/error';
import PrivateRoute from '../private-route/private-route';
import {Offer, City} from '../../types/offer';
// import {Offer} from '../../types/offer';
import {Review} from '../../types/review';


type AppScreenProps = {
  offersCount: number;
  offers: Offer[];
  reviews: Review[];
  city: City;
  // points: Offer[];
}

function App({offersCount, offers, reviews, city}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen city={city} offersCount={offersCount} offers={offers} />}
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
          element={<RoomScreen offers={offers} reviews={reviews}/>}
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
