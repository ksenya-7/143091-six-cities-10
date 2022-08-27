import {Link} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {logoutAction} from '../../store/api-actions';
import {isAuth} from '../../utils';
import {AppRoute} from '../../const';
import {getAuthorizationStatus, getUserData} from '../../store/user-process/selectors';
import {getFavoriteOffers} from '../../store/offer-process/selectors';


function Header(): JSX.Element {
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const userData = useAppSelector(getUserData);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {!isAuth(authorizationStatus) &&
                <li className="header__nav-item">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Login}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>}
              {isAuth(authorizationStatus) &&
                <>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{userData ? `${userData.email}` : ''}</span>
                      <span className="header__favorite-count">{favoriteOffers.length}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link
                      onClick={(evt) => {
                        evt.preventDefault();
                        dispatch(logoutAction());
                      }}
                      className="header__nav-link"
                      to='/'
                    >
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
