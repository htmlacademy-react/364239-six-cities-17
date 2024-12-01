import {Link} from 'react-router-dom';
import Header from '../../components/header/header';

function Page404(): JSX.Element {
  return (
    <div>
      <Header/>
      <h1>404 Not Found</h1>
      <Link to="/">
        <span>Back to main page</span>
      </Link>
    </div>
  );
}

export default Page404;
