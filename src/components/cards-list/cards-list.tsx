import { OfferType } from '../../types/offer';
import Card from '../card/card';

type Props = {
    offers: OfferType[];
    onHandleActiveCardChange: (id: string | null)=>void;
};

function OffersList({ offers, onHandleActiveCardChange }:Props) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          onHandleActiveCardChange={onHandleActiveCardChange}
          key={offer.id}
          offer={offer}
          cardType='cities'
        />
      ))}
    </div>
  );
}

export default OffersList;
