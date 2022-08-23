import Comment from '../comment/comment';
import FormReview from '../../components/form-review/form-review';
import {useAppSelector} from '../../hooks';


function ReviewsList(): JSX.Element {
  const reviews = useAppSelector((state) => state.reviews);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Comment
            review={review}
            key={review.id}
          />
        ))}
      </ul>
      <FormReview />
    </section>
  );
}

export default ReviewsList;
