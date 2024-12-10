import Header from '../../components/header/header';
import {OfferType} from '../../types/offer';
import FavoriteGroup from '../../components/favorite-group/favorite-group.tsx';

import {getOfferGroups} from '../../adaptors.ts';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.ts';

type Props = {
  offers: OfferType[];
}

function Favorites({offers}: Props): JSX.Element {
  const offerGroups = getOfferGroups(offers);
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                Object.keys(offerGroups).map((groupKey) => {
                  const group: OfferType[] = offerGroups[groupKey];
                  return <FavoriteGroup key={groupKey} offers={group} city={groupKey} />;
                })
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );

}

export default Favorites;
