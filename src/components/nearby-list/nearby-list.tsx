import { OfferType } from '../../types/offer';
import Card from '../card/card';


type Props = {
  list: OfferType[];
}

function NearbyList({ list }: Props) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          list.map((offer) => <Card key={offer.id} offer={offer} cardType='near-places' />)
        }
      </div>
    </section>
  );
}

export {NearbyList};
