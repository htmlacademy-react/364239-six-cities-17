import OffersList from '../../components/cards-list/cards-list.tsx';
import Header from '../../components/header/header.tsx';
import Locations from '../../components/locations/locations.tsx';
import Sorting from '../../components/sorting/sorting.tsx';
import { OfferType } from '../../types/offer.tsx';
import { useState } from 'react';
import Map from '../../components/map/map';
import { AMSTERDAM_CITY } from '../../const.ts';

type Props = {
  offers: OfferType[];
}

function MainPage({offers} : Props): JSX.Element {
  const [activeOfferCardId, setActiveOfferCardId] = useState<string | undefined>('');

  const offerCardMouseEnterHandler = (id: string): void => {
    setActiveOfferCardId(id);
  };
  const offerCardMouseLeaveHandler = (): void => {
    setActiveOfferCardId(undefined);
  };

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
                <OffersList offers={offers} onOfferCardMouseEnterHandler={offerCardMouseEnterHandler} onOfferCardMouseLeaveHandler={offerCardMouseLeaveHandler}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map points={offers} selectedPoint={activeOfferCardId} city={AMSTERDAM_CITY} className='cities__map'/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;


