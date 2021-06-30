import React, { Suspense } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MovieDetailsPage from './views/MovieDetailsPage';
import MoviesPage from './views/MoviesPage';
import MyLoader from './components/MyLoader/MyLoader';


const App = () => (
  <>
    
    <ul>
      <li> <NavLink exact to="/">Home</NavLink> </li>
      <li> <NavLink to="/movies">Movie</NavLink> </li>
    </ul>
    <Suspense fallback={<MyLoader />}>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
      </Switch>
    </Suspense>
  </>
);


export default App;