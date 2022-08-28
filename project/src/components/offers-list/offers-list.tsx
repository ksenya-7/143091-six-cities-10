import Card from '../card/card';
import {Offer} from '../../types/offer';


type OffersListProps = {
  offers: Offer[];
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}

function OffersList(props: OffersListProps): JSX.Element {
  const {offers, onMouseEnter, onMouseLeave} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          offer={offer}
          key={offer.id}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          cardClassName={'cities__card'}
          imageClassName={'cities__image-wrapper'}
          imageWidth={260}
          imageHeight={200}
          isFavorite={offer.isFavorite}
        />
      ))}
    </div>
  );
}

export default OffersList;
