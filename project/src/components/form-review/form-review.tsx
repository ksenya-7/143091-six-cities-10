import React, {useState, FormEvent, ChangeEvent} from 'react';
import {useAppDispatch} from '../../hooks';
import {PostReviewAction} from '../../store/api-actions';
import {PostReview} from '../../types/review';
import {ratingStars, REVIEW_MAX_LENGTH, REVIEW_MIN_LENGTH} from '../../const';


type FormReviewProps = {
  id: string;
}

function FormReview({id}: FormReviewProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [isCorrectLength, setIsCorrectLength] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [ratingValue, setRatingValue] = useState('');
  const [textComment, setTextComment] = useState('');

  let isDisabled = !(isCorrectLength && ratingValue !== '');

  const handleInputChange = ({target}:ChangeEvent<HTMLInputElement>) => {
    const {value} = target;
    setRatingValue(value);
  };

  const handleTextAreaChange = ({target}:ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = target;
    setTextComment(value);
    setIsCorrectLength(value.length >= REVIEW_MIN_LENGTH && value.length <= REVIEW_MAX_LENGTH);
  };

  const onSubmit = (newReview: PostReview) => {
    dispatch(PostReviewAction(newReview));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (textComment !== '' && ratingValue !== '' && id) {
      onSubmit({
        hotelId: id,
        comment: textComment,
        rating: ratingValue.toString(),
      });
    }
    setTextComment('');
    setRatingValue('');
    setIsChecked(false);
    isDisabled = true;
  };

  return (
    <form className="reviews__form form" action="" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingStars.map((item) => (
          <React.Fragment key={item.number}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={item.number}
              id={`${item.number}-stars`}
              type="radio"
              onChange={handleInputChange}
              checked={isChecked}
            />
            <label htmlFor={`${item.number}-stars`} className="reviews__rating-label form__rating-label" title={item.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleTextAreaChange}
        value={textComment}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormReview;
