import React, {useRef, useState, FormEvent, ChangeEvent} from 'react';
import {useAppDispatch} from '../../hooks';
import {postReviewAction} from '../../store/api-actions';
import {ReviewAddParams} from '../../types/review';
import {ratingStars, REVIEW_MAX_LENGTH, REVIEW_MIN_LENGTH} from '../../const';


type FormReviewProps = {
  id: string;
}

function FormReview({id}: FormReviewProps): JSX.Element {
  const dispatch = useAppDispatch();

  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState(({
    rating: '',
    review: '',
  }));

  const isDisabled = formData.rating === '' || formData.review.length < REVIEW_MIN_LENGTH ||
  formData.review.length > REVIEW_MAX_LENGTH;

  const handleInputChange = ({target}:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = target;
    setFormData({...formData, [name]:value});
  };

  const onSubmit = (newReview: ReviewAddParams) => {
    dispatch(postReviewAction(newReview));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formData.review !== '' && formData.rating !== '' && id) {
      onSubmit({
        hotelId: id,
        comment: formData.review,
        rating: formData.rating.toString(),
      });
    }

    formRef.current?.reset();
    setFormData({...formData, review: ''});
  };

  return (
    <form
      className="reviews__form form"
      action=""
      method="post"
      ref={formRef}
      onSubmit={handleSubmit}
    >
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
            />
            <label
              htmlFor={`${item.number}-stars`}
              className="reviews__rating-label form__rating-label"
              title={item.title}
            >
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
        onChange={handleInputChange}
        value={formData.review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
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
