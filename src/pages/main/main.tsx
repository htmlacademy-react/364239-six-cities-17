import Card from '../../components/card/card.tsx';
import Header from '../../components/header/header.tsx';
import Locations from '../../components/locations/locations.tsx';
import Sorting from '../../components/sorting/sorting.tsx';

type MainPageProps = {
  countChoices: number;
}

function MainPage({countChoices} : MainPageProps): JSX.Element {
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
              <div className='cities__places-list places__list tabs__content'>
                {[...Array<number>(countChoices)].map(()=> <Card key={Math.random()}/>)}
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
