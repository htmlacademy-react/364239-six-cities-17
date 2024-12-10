import {OfferType} from '../../types/offer.tsx';
import Card from '../card/card.tsx';
import {Link} from 'react-router-dom';

type Props = {
  offers: OfferType[];
  city: string;
}

function FavoriteGroup({offers, city}: Props) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="#">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {
          offers.map((offer) => <Card key={offer.id} offer={offer} cardType='favorites'/>)
        }
      </div>
    </li>
  );
}

export default FavoriteGroup;
