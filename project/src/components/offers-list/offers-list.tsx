import Card from '../card/card';
import {Offer} from '../../types/offer';

type OffersListProps = {
  offersCount: number;
  offers: Offer[];
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}

function OffersList(props: OffersListProps): JSX.Element {
  const {offersCount, offers, onMouseEnter, onMouseLeave} = props;
  const filteredByCityOffers = offers.filter((offer) => offer.city.name === 'Amsterdam');

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersCount} places to stay in Amsterdam</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select" />
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
        {filteredByCityOffers.map((offer) => (
          <Card
            offer={offer}
            key={offer.id}
            onMouseEnter = {onMouseEnter}
            onMouseLeave = {onMouseLeave}
            cardClassName = {'cities__card'}
            imageClassName = {'cities__image-wrapper'}
            imageWidth = {260}
            imageHeight = {200}
          />
        ))}
      </div>
    </section>
  );
}

export default OffersList;
