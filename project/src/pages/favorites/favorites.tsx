import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import Card from '../../components/card/card';
import {Offer} from '../../types/offer';
import {useAppSelector} from '../../hooks';

const sortByMark = (item: Offer) => item.isPremium ? -1 : 1;

function FavoritesScreen(): JSX.Element {
  const handleMouseEnter = () => null;
  const handleMouseLeave = () => null;

  const offers = useAppSelector((state) => state.offers);

  const favoritesOfferAmsterdam = offers.filter((offer) => offer.city.name === 'Amsterdam' && offer.isFavorite);
  const favoritesOfferCologne = offers.filter((offer) => offer.city.name === 'Cologne' && offer.isFavorite);

  return (
    <React.Fragment>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox={'0 0 7 4'}><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox={'0 0 17 18'}><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox={'0 0 13 12'}><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>
      <div className="page">
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
                      <span className="header__favorite-count">{offers.filter((offer) => offer.isFavorite).length}</span>
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

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href={'/'}>
                        <span>Amsterdam</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favoritesOfferAmsterdam.sort(sortByMark).map((offer) => (
                      <Card
                        offer={offer}
                        key={offer.id}
                        onMouseEnter = {handleMouseEnter}
                        onMouseLeave = {handleMouseLeave}
                        cardClassName = {'favorites__card'}
                        imageClassName = {'favorites__image-wrapper'}
                        infoClassName = {'favorites__card-info'}
                        imageWidth = {150}
                        imageHeight = {110}
                      />
                    ))}
                  </div>
                </li>

                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href={'/'}>
                        <span>Cologne</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favoritesOfferCologne.sort(sortByMark).map((offer) => (
                      <Card
                        offer={offer}
                        key={offer.id}
                        onMouseEnter = {handleMouseEnter}
                        onMouseLeave = {handleMouseLeave}
                        cardClassName = {'favorites__card'}
                        imageClassName = {'favorites__image-wrapper'}
                        infoClassName = {'favorites__card-info'}
                        imageWidth = {150}
                        imageHeight = {110}
                      />
                    ))}
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Link className="header__logo-link" to="/">
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </Link>
        </footer>
      </div>

    </React.Fragment>
  );
}

export default FavoritesScreen;
