import {Review} from '../../types/review';

type CommentProps = {
  review: Review;
}

function Comment({review}: CommentProps): JSX.Element {
  const {date, comment, rating, user} = review;

  const ratingAsPercent = (rating >= 0 && rating <= 5) ? Math.round(rating) * 20 : 0;
  const datestamp = new Date(date);
  const month = datestamp.getMonth();
  const monthTitle = [ 'January ', 'February ', 'March ', 'April ', 'May ', 'June ', 'July ', 'August ', 'September ', 'October ', 'November ', 'December '];
  const dateMonthYear = `${monthTitle[month]} ${datestamp.getFullYear()}`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${ratingAsPercent}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{dateMonthYear}</time>
      </div>
    </li>
  );
}

export default Comment;
