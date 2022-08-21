import React, {useState} from 'react';
import Logo from '../../components/logo/logo';
import OffersList from '../../components/offers-list/offers-list';
import Sorting from '../../components/sorting-form/sorting-form';
import CitiesList from '../../components/cities-list/cities-list';
import Map from '../../components/map/map';
import {Offer} from '../../types/offer';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {selectOffers} from '../../store/selectors';
import {cities} from '../../const';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {logoutAction} from '../../store/api-actions';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import {isCheckedAuth, isAuth} from '../../utils';

function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.city);
  const offers = useAppSelector(selectOffers);
  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>();

  const handleMouseEnter = (id: number) => {
    const currentOffer = offers.find((offer: Offer) => offer.id === id);

    setSelectedOffer(currentOffer);
  };

  const handleMouseLeave = () => {
    setSelectedOffer(undefined);
  };

  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <React.Fragment>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox={'0 0 7 4'}><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox={'0 0 17 18'}><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox={'0 0 13 12'}><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo />
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href={'/'}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">3</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    {!isAuth(authorizationStatus) &&
                      <Link
                        className="header__nav-link header__nav-link--profile"
                        to={AppRoute.Login}
                      >
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__login">Sign in</span>
                      </Link>}
                    {isAuth(authorizationStatus) &&
                      <Link
                        onClick={(evt) => {
                          evt.preventDefault();
                          dispatch(logoutAction());
                        }}
                        className="header__nav-link"
                        to='/'
                      >
                        <span className="header__signout">Sign out</span>
                      </Link>}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList activeCity = {activeCity}/>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {activeCity}</b>
                <Sorting />
                <OffersList
                  offers={offers}
                  onMouseEnter = {handleMouseEnter}
                  onMouseLeave = {handleMouseLeave}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map city={cities[activeCity as keyof typeof cities]} offers={offers} selectedOffer={selectedOffer} />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default MainScreen;
