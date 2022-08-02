import {Offer} from '../../types/offer';

type OfferFavoriteCardScreenProps = {
  offer: Offer;
};

function FavoriteCard(props: OfferFavoriteCardScreenProps): JSX.Element {
  const {offer} = props;
  const {isPremium, mark, previewImage, rating, title, price, entire} = offer;

  return (
    <article className="favorites__card place-card">
      {isPremium ? <div className="place-card__mark"><span>{mark}</span></div> : null}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href={'/'}>
          <img className="place-card__image" src={previewImage.src} width="150" height="110" alt={previewImage.alt}/>
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating.width}` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={'/'}>{title}</a>
        </h2>
        <p className="place-card__type">{entire}</p>
      </div>
    </article>
  );
}

export default FavoriteCard;
