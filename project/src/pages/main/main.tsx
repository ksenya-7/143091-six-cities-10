import React from 'react';
// import React, {useState} from 'react';
import Logo from '../../components/logo/logo';
import List from '../../components/list-offers/list-offers';
import Map from '../../components/map/map';
import {Offer, City} from '../../types/offer';
// import {Offer} from '../../types/offer';

type MainScreenProps = {
  offersCount: number;
  offers: Offer[];
  city: City;
}

function MainScreen(props: MainScreenProps): JSX.Element {
  const {offersCount, offers, city} = props;

  // const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(
  //   undefined
  // );

  // const onListItemHover = (id: number) => {
  //   const currentOffer = offers.find((offer) => offer.id === id);

  //   setSelectedOffer(currentOffer);
  // };
  //  onMouseEnter={onListItemHover}

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
                    <a className="header__nav-link" href={'/'}>
                      <span className="header__signout">Sign out</span>
                    </a>
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
              <ul className="locations__list tabs__list">
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href={'/'}>
                    <span>Paris</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href={'/'}>
                    <span>Cologne</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href={'/'}>
                    <span>Brussels</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item tabs__item--active" href={'/'}>
                    <span>Amsterdam</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href={'/'}>
                    <span>Hamburg</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href={'/'}>
                    <span>Dusseldorf</span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <List offersCount={offersCount} offers={offers} />
              <div className="cities__right-section">
                <Map city={city} offers={offers} selectedOffer={offers[1]} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default MainScreen;
