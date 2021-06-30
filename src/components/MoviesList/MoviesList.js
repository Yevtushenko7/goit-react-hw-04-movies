import React from 'react';
import PropTypes from 'prop-types';
import MoviesListItem from './MoviesListItem/MoviesListItem';

const MoviesList = ({ movies }) => (
  <ul>
    {movies.map(
      ({ id, poster_path: posterPath, vote_average: voteAverage, title }) => (
        <MoviesListItem
          key={id}
          poster={posterPath}
          vote={voteAverage}
          title={title}
          id={id}
        />
      ),
    )}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default MoviesList;