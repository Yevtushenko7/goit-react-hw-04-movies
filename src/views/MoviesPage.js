import React, { Component } from 'react';
import queryString from 'query-string';
import ApiMovie from '../service/ApiMovie';
import MovieSearchList from '../components/MovieSearchList/MovieSearchList';
import SearchBar from '../components/SearchBar/SearchBar';


class MoviesPage extends Component {
  state = {
      searchQuery: "",
      movies: [],
    }
    
    
  componentDidMount() {
    const { query } = this.getQueryFromProps(this.props)
    if (query) {
        this.setState({ searchQuery: query })
      }
    }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state
    if (searchQuery !== prevState.searchQuery) {
      this.getMovies()
      this.props.history.push({
        search: `query=${searchQuery}`,
      })
    }
  }

  getMovies() {
    const { searchQuery } = this.state
    ApiMovie.getByQueryMovies(searchQuery).then((res) =>
      this.setState({
        movies: res,
      })
    )
  }

  getQueryFromProps = props => queryString.parse(props.location.search);

  onQueryChange = (query) => {
    this.setState({
      searchQuery: query,
    })
  }

  render() {
    const { movies} = this.state
      return (
          <>
              <SearchBar onSubmit={this.onQueryChange} />
              <MovieSearchList movies={movies} />
          </>
      )
    }
}

export default MoviesPage;