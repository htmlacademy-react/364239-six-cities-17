import { ReviewType } from '../../types/offer';
import Review from '../review/review';
import AddCommentForm from '../../components/add-comment-form/add-comment-form';

type Props = {
    list: ReviewType[];
  }

function ReviewsList({ list }: Props): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        {
          list.map((review) => <Review key={review.id} data={review}/>)
        }
      </ul>
      <AddCommentForm />
    </section>
  );
}

export default ReviewsList;
