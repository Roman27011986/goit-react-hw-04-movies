import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from './pages/NotFoundPage/NotFoundPage';
import routes from './routes';
import AppBar from './components/AppBar';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage.jsx' /* webpackChunkName: "HomePage" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage/MovieDetailsPage.jsx' /* webpackChunkName: "MovieDetailsPage" */
  ),
);
const MoviesPage = lazy(() =>
  import(
    './pages/MoviesPage/MoviesPage.jsx' /* webpackChunkName: "MoviesPage" */
  ),
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </>
);

export default App;
