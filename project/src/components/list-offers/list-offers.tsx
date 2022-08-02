import {useState} from 'react';
import Card from '../../components/card/card';
import {Offer} from '../../types/offer';

type ListOffersScreenProps = {
  offersCount: number;
  offers: Offer[];
}

function ListOffers({offersCount, offers}: ListOffersScreenProps): JSX.Element {
  const [, setActiveCardId] = useState<number | undefined>(undefined);

  const handleMouseEnter = (offerId:number) => {
    setActiveCardId(offerId);
  };

  const handleMouseLeave = () => {
    setActiveCardId(undefined);
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersCount} places to stay in Amsterdam</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex={0}>Popular</li>
          <li className="places__option" tabIndex={0}>Price: low to high</li>
          <li className="places__option" tabIndex={0}>Price: high to low</li>
          <li className="places__option" tabIndex={0}>Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {offers.filter((offer) => offer.location === 'Amsterdam').map((offer) => {
          const keyValue = offer.id;
          return (
            <Card
              offer={offer}
              key={keyValue}
              onMouseEnter = {handleMouseEnter}
              onMouseLeave = {handleMouseLeave}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ListOffers;
