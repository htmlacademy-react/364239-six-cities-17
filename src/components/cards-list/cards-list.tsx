import { OfferType } from '../../types/offer';
import Card from '../card/card';

type Props = {
    offers: OfferType[];
    onOfferCardMouseEnterHandler: (id: string)=> void;
    onOfferCardMouseLeaveHandler: () => void;

};

function OffersList({ offers, onOfferCardMouseEnterHandler, onOfferCardMouseLeaveHandler}:Props) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          onOfferCardMouseEnterHandler={onOfferCardMouseEnterHandler}
          onOfferCardMouseLeaveHandler={onOfferCardMouseLeaveHandler}
          key={offer.id}
          offer={offer}
          cardType='cities'
        />
      ))}
    </div>
  );
}

export default OffersList;
