import {Review} from '../../types/review';
import {MONTHS} from '../../const';
import {getRatingPercentage} from '../../utils/utils';


type CommentProps = {
  review: Review;
}

function Comment({review}: CommentProps): JSX.Element {
  const {date, comment, rating, user} = review;

  const datestamp = new Date(date);
  const month = datestamp.getMonth();

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar"
            src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getRatingPercentage(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time
          className="reviews__time"
          dateTime={date}
        >
          {`${MONTHS[month]} ${datestamp.getFullYear()}`}
        </time>
      </div>
    </li>
  );
}

export default Comment;
