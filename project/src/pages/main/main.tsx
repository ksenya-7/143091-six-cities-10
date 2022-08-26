import React, {useState} from 'react';
import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';
import Sorting from '../../components/sorting-form/sorting-form';
import CitiesList from '../../components/cities-list/cities-list';
import Map from '../../components/map/map';
import {Offer} from '../../types/offer';
import {useAppSelector} from '../../hooks';
import {cities} from '../../const';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import {getActiveCity} from '../../store/data-process/selectors';
import {selectOffersByCity, getDataLoaded} from '../../store/offer-process/selectors';


function MainScreen(): JSX.Element {
  const activeCity = useAppSelector(getActiveCity);

  const offers = useAppSelector(selectOffersByCity);
  const isDataLoaded = useAppSelector(getDataLoaded);
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>();

  const handleMouseEnter = (id: number) => {
    const currentOffer = offers.find((offer: Offer) => offer.id === id);

    setSelectedOffer(currentOffer);
  };

  const handleMouseLeave = () => {
    setSelectedOffer(undefined);
  };

  if (isDataLoaded) {
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
        <Header />

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
