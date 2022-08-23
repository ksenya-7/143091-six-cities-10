import Card from '../card/card';
import {Offer} from '../../types/offer';

type NearOffersListProps = {
  offers: Offer[];
  onMouseEnter?: (id: number) => void;
  onMouseLeave?: () => void;
}

function NearOffersList(props: NearOffersListProps): JSX.Element {
  const {offers, onMouseEnter, onMouseLeave} = props;

  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <Card
          offer={offer}
          key={offer.id}
          onMouseEnter = {onMouseEnter}
          onMouseLeave = {onMouseLeave}
          cardClassName = {'near-places__card'}
          imageClassName = {'near-places__image-wrapper'}
          imageWidth = {260}
          imageHeight = {200}
        />
      ))}
    </div>
  );
}

export default NearOffersList;
