import React, { Component, Suspense} from 'react';
import ApiMovie from '../service/ApiMovie';
import { NavLink, Route } from 'react-router-dom';
import MyLoader from '../components/MyLoader/MyLoader';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';


class MovieDetailsPage extends Component {

    state = {
        movie: '',
        loader: false
    };

    async componentDidMount() {
        this.setState({ loader: true });
        const idMovie = this.props.match.params.movieId;
        const response = await ApiMovie.getMovieById(idMovie);
        const movie = response.data;
        this.setState({ movie, loader: false });
    }

    onBackBtnClick = from => () => this.props.history.push(from);
    
    render() {
        const { loader, movie } = this.state;
        const { from } = this?.props?.location?.state || {
            from: { pathname: '/' },
        };
        const { match } = this.props;
        const {
            title,
            poster_path: poster,
            genres,
            release_date: date,
            overview,
            vote_average: average,
            id,
        } = movie;
        
        return (
            <>
            <button type="button" onClick={this.onBackBtnClick(from)}>
             Go Back
                </button>
             {loader && <MyLoader />}
        
         <MovieDetails
            title={title}
            poster={poster}
            genres={genres}
            date={date}
            overview={overview}
            average={average}
          />
             <div>
          <p>More info:</p>
          <ul>
            <NavLink
              to={{
                pathname: `${match.url}/cast`,
                state: {
                  from: from,
                },
              }}
            >
              <li>Cast</li>
            </NavLink>
            <NavLink
              to={{
                pathname: `${match.url}/review`,
                state: {
                  from: from,
                },
              }}
            >
              <li>Reviews</li>
            </NavLink>
          </ul>
          <Suspense fallback={<MyLoader />}>
            <Route path={`${match.path}/cast`} render={() => <Cast id={id} />} />
            <Route path={`${match.path}/review`} render={() => <Reviews id={id} />} />
          </Suspense>
        </div>   

            </>
 
   
        
        
    
    );
  }
}

export default MovieDetailsPage;