import {Link} from 'react-router-dom';
import {OfferCard} from '../../types/offer';

type OfferCardScreenProps = {
  offer: OfferCard;
  onMouseEnter: () => void;
};

function Card(props: OfferCardScreenProps): JSX.Element {
  const {offer, onMouseEnter} = props;
  const {id, isMark, mark, images, rating, title, isActiveButton, price, features} = offer;

  return (
    <article className="cities__card place-card" onMouseEnter={onMouseEnter}>
      {isMark ? <div className="place-card__mark"><span>{mark}</span></div> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={'/'}>
          <img className="place-card__image" src={images[1].src} width="260" height="200" alt={images[1].alt} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={isActiveButton ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'property__bookmark-button button'} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating.width}` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{features[0]}</p>
      </div>
    </article>
  );
}

export default Card;
