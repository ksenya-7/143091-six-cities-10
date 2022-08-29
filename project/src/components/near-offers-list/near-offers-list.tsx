import Card from '../card/card';
import {Offer} from '../../types/offer';


type NearOffersListProps = {
  offers: Offer[];
}

function NearOffersList({offers}: NearOffersListProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <Card
          offer={offer}
          key={offer.id}
          cardClassName={'near-places__card'}
          imageClassName={'near-places__image-wrapper'}
          imageWidth={260}
          imageHeight={200}
        />
      ))}
    </div>
  );
}

export default NearOffersList;
