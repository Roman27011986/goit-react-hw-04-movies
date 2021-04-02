import { Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';

const App = () => (
  <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/movies">Movies</Link>
      </li>
    </ul>
    <Route exact path="/" component={HomePage} />
    <Route path="/movies" component={MoviesPage} />
  </>
);

export default App;
