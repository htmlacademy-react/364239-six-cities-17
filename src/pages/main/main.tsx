import OffersList from '../../components/cards-list/cards-list.tsx';
import Header from '../../components/header/header.tsx';
import Locations from '../../components/locations/locations.tsx';
import Sorting from '../../components/sorting/sorting.tsx';
import { OfferType } from '../../types/offer.tsx';
import { useState } from 'react';

type Props = {
  offers: OfferType[];
}

function MainPage({offers} : Props): JSX.Element {
  const [isActiveCard, setActiveCard] = useState<string|null>(null);


  const handleActiveCardChange = (id: string | null) => setActiveCard(id);
  // eslint-disable-next-line no-console
  console.log(isActiveCard);

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Locations/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <Sorting/>
              <div className="cities__places-list places__list tabs__content">
                <OffersList onHandleActiveCardChange={handleActiveCardChange} offers={offers} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;


