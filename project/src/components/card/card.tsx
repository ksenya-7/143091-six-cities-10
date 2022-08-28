import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {toggleFavoriteStatusOfferAction} from '../../store/api-actions';
import {Offer} from '../../types/offer';
import {getRatingPercentage} from '../../utils';

type OfferScreenProps = {
  offer: Offer;
  onMouseEnter?: (id: number) => void;
  onMouseLeave?: () => void;
  cardClassName?: string;
  imageClassName?: string;
  infoClassName?: string;
  imageWidth: number;
  imageHeight: number;
  isFavorite: boolean;
};

function Card(props: OfferScreenProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {offer, cardClassName, imageClassName, infoClassName = '', imageWidth, imageHeight, onMouseEnter, onMouseLeave} = props;
  const {id, isPremium, images, rating, title, price, type} = offer;
  let {isFavorite} = props;

  const handleMouseEnter = () => {
    if (onMouseEnter) {
      onMouseEnter(offer.id);
    }
  };

  const handleClickBookmarkButton = () => {
    const statusAndId = {
      hotelId: offer.id,
      status: offer.isFavorite ? '1' : '0',
    };
    dispatch(toggleFavoriteStatusOfferAction(statusAndId));
    isFavorite = !isFavorite;
    // console.log(isFavorite);
  };

  return (
    <article className={`${cardClassName} place-card`} onMouseEnter={handleMouseEnter} onMouseLeave={onMouseLeave}>
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null}
      <div className={`${imageClassName} place-card__image-wrapper`}>
        <a href={'/'}>
          <img className="place-card__image" src={images[0]} width={imageWidth} height={imageHeight} alt="Place" />
        </a>
      </div>
      <div className={`${infoClassName} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
            onClick={handleClickBookmarkButton}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRatingPercentage(rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
