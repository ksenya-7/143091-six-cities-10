// import Comment from '../comment/comment';
import {Review} from '../../types/review';
import FormReview from '../../components/form-review/form-review';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  const reviewCount = reviews.length;
  // console.log(reviews);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewCount}</span></h2>
      <ul className="reviews__list">
        {/* {reviews.map((review) => {
          // <Comment
          //   key={review.id}
          //   review={review}
          // />;
        })} */}
      </ul>
      <FormReview />
    </section>
  );
}

export default ReviewsList;
