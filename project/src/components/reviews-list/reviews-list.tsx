import Comment from '../comment/comment';
import FormReview from '../../components/form-review/form-review';
import {useAppSelector} from '../../hooks';
import {isAuth} from '../../utils';


type ReviewsListProps = {
  id: string;
}

function ReviewsList({id}: ReviewsListProps): JSX.Element {
  const reviews = useAppSelector((state) => state.reviews);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

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
      {isAuth(authorizationStatus) && <FormReview id={id}/>}
    </section>
  );
}

export default ReviewsList;
