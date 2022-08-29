// import {memo} from 'react';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {toggleFavoriteStatusOfferAction, fetchOffersAction, fetchFavoriteOffersAction, fetchOfferByIdAction, fetchOffersNearbyAction} from '../../store/api-actions';
import {redirectToRoute} from '../../store/action';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {Offer} from '../../types/offer';
import {getRatingPercentage} from '../../utils';
import {AppRoute, AuthorizationStatus} from '../../const';


type OfferScreenProps = {
  offer: Offer;
  onMouseEnter?: (id: number) => void;
  onMouseLeave?: () => void;
  cardClassName?: string;
  imageClassName?: string;
  infoClassName?: string;
  imageWidth: number;
  imageHeight: number;
};

function Card(props: OfferScreenProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const {offer, cardClassName, imageClassName, infoClassName = '', imageWidth, imageHeight, onMouseEnter, onMouseLeave} = props;
  const {id, isPremium, images, rating, title, price, type, isFavorite} = offer;

  const handleMouseEnter = () => {
    if (onMouseEnter) {
      onMouseEnter(offer.id);
    }
  };

  const handleClickBookmarkButton = () => {
    if(authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(toggleFavoriteStatusOfferAction({hotelId: offer.id, status: offer.isFavorite ? '0' : '1'}));
      dispatch(fetchOffersAction());
      dispatch(fetchOfferByIdAction(id.toString()));
      dispatch(fetchOffersNearbyAction(id.toString()));
      dispatch(fetchFavoriteOffersAction());
    } else {
      dispatch(redirectToRoute(AppRoute.Login));
    }
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
// export default memo(Card, (prevProps: Offer, nextProps: Offer) => prevProps.isFavorite === nextProps.isFavorite);
