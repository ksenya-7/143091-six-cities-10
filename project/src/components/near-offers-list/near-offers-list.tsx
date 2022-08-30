import Card from '../card/card';
import {useAppSelector} from '../../hooks';
import {getOffersNearby} from '../../store/offer-process/selectors';


function NearOffersList(): JSX.Element {
  const offersNearby = useAppSelector(getOffersNearby);
  return (
    <div className="near-places__list places__list">
      {offersNearby.map((offer) => (
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
