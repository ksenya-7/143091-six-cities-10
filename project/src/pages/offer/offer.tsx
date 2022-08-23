import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../../hooks';
import Header from '../../components/header/header';
import ReviewsList from '../../components/reviews-list/reviews-list';
import NearOffersList from '../../components/near-offers-list/near-offers-list';
import Map from '../../components/map/map';
import {Offer} from '../../types/offer';
import NotFoundScreen from '../../pages/error/error';
import {getRatingPercentage} from '../../utils';
import {cityObjects} from '../../const';
import {fetchReviewAction} from '../../store/api-actions';

function RoomScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const [, setSelectedOffer] = useState<Offer | undefined>();

  useEffect(() => {
    if (id) {
      dispatch(fetchReviewAction(id));
    }
  }, [dispatch, id]);

  const offers = useAppSelector((state) => state.offers);
  const activeCity = useAppSelector((state) => state.city);
  const cities = cityObjects;

  const linkedOffer = offers.find((item) => item.id === Number(id));
  if(!linkedOffer) {
    return (<NotFoundScreen />);
  }
  const {images, isPremium, title, isFavorite, rating, goods, price, type, bedrooms, maxAdults, host, description} = linkedOffer;

  const slicedImages = images.slice(0,6);

  const handleMouseEnter = (idOffer: number) => {
    const currentOffer = offers.find((offer) => offer.id === idOffer);

    setSelectedOffer(currentOffer);
  };

  const handleMouseLeave = () => {
    setSelectedOffer(undefined);
  };

  const filteredByNearOffers = offers.filter((offer) => offer.id !== Number(id) && offer.city.name === activeCity);
  const slicedNearOffers = filteredByNearOffers.slice(0,3);
  const checkedCity = cities.find((item) => item.name === activeCity);

  if(!checkedCity) {
    return (<NotFoundScreen />);
  }

  return (
    <React.Fragment>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox={'0 0 7 4'}><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox={'0 0 17 18'}><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox={'0 0 13 12'}><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>
      <div className="page">
        <Header />

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {slicedImages.map((image, index) => {
                  const keyValue = `${index}-${image}`;
                  return (
                    <div key={keyValue} className="property__image-wrapper">
                      <img className="property__image" src={image} alt="Place"/>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium ? <div className="property__mark"><span>Premium</span></div> : null}
                <div className="property__name-wrapper">
                  <h1 className="property__name">{title}</h1>
                  <button className={`property__bookmark-button ${isFavorite ? 'property__bookmark-button--active' : ''} button`} type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{ width: `${getRatingPercentage(rating)}%` }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  {type ? <li className="property__feature property__feature--entire">{type}</li> : null}
                  {bedrooms ? <li className="property__feature property__feature--bedrooms">{bedrooms}</li> : null}
                  {maxAdults ? <li className="property__feature property__feature--adults">Max {maxAdults} adults</li> : null}
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((item, index) => {
                      const keyValue = `${index}-${item}`;
                      return (
                        <li key={keyValue} className="property__inside-item">
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper ${host.isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                    <span className="property__user-status">
                      {host.isPro ? 'Pro' : null}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <ReviewsList />
              </div>
            </div>
            <section className="property__map map">
              <Map city={checkedCity} offers={slicedNearOffers} />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <NearOffersList
                offers={slicedNearOffers}
                onMouseEnter = {handleMouseEnter}
                onMouseLeave = {handleMouseLeave}
              />
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default RoomScreen;
