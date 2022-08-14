import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {getRatingPercentage} from '../../utils';

type OfferScreenProps = {
  offer: Offer;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
  cardClassName?: string;
  imageClassName?: string;
  infoClassName?: string;
  imageWidth: number;
  imageHeight: number;
};

function Card(props: OfferScreenProps): JSX.Element {
  const {offer, cardClassName, imageClassName, infoClassName, imageWidth, imageHeight, onMouseEnter, onMouseLeave} = props;
  const {id, isPremium, mark, images, rating, title, isFavorite, price, entire} = offer;

  const handleMouseEnter = () => {
    onMouseEnter(offer.id);
  };

  return (
    <article className={`${cardClassName} place-card`} onMouseEnter={handleMouseEnter} onMouseLeave={onMouseLeave}>
      {isPremium ? <div className="place-card__mark"><span>{mark}</span></div> : null}
      <div className={`${imageClassName} place-card__image-wrapper`}>
        <a href={'/'}>
          <img className="place-card__image" src={images[1].src} width={imageWidth} height={imageHeight} alt={images[1].alt} />
        </a>
      </div>
      <div className={`${infoClassName} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'property__bookmark-button button'} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRatingPercentage(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{entire}</p>
      </div>
    </article>
  );
}

export default Card;
