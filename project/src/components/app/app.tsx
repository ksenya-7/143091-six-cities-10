import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../../pages/main/main';
import FavoritesScreen from '../../pages/favorites/favorites';
import LoginScreen from '../../pages/login/login';
import RoomScreen from '../../pages/offer/offer';
import NotFoundScreen from '../../pages/error/error';
import PrivateRoute from '../private-route/private-route';
import {Review} from '../../types/review';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

type AppScreenProps = {
  reviews: Review[];
}

function App({reviews}: AppScreenProps): JSX.Element {
  const {isDataLoaded} = useAppSelector((state) => state);

  if (isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainScreen />
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
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<RoomScreen reviews={reviews}/>}
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
