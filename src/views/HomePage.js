import React, {Component} from 'react';
import ApiMovie from '../service/ApiMovie';
import MoviesList from '../components/MoviesList/MoviesList';

class HomePage extends Component {
    state = {
        movies:[],
    }

    async componentDidMount() {
        await ApiMovie.getTrendMovies().then((res) => this.setState({ movies: [...res] }))
        
    }
    render() {
        const { movies } = this.state
         return <MoviesList movies={movies} />
      
    };

};


export default HomePage;