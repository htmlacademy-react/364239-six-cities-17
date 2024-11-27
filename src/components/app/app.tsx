import MainPage from '../../pages/main/main';

type AppProps = {
  countChoices: number;
}

function App({countChoices}: AppProps): JSX.Element {
  return (
    <MainPage countChoices={countChoices}/>
  );
}

export default App;
