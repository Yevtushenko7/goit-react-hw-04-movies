import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ApiMovie from '../../service/ApiMovie';
import DefaultProfile from '../Cast/Default_profile.jpg'

class Cast extends Component{

    state = { cast: null, baseUrl: "https://image.tmdb.org/t/p/w500" };

    async componentDidMount() {
    const { id } = this.props;
    const cast = await ApiMovie
      .getMovieById(id, '/credits')
      .then(res => res.data.cast);
    this.setState({ cast });
    }
    
    render() {
        const { cast, baseUrl} = this.state;
        return (
            <ul>
                {cast &&
                    cast.map(({ id, profile_path, name, character }) => (
                        <li key={id}>
                            <img src={profile_path ? baseUrl + profile_path : DefaultProfile} alt={name} width="100" />
                            <p>{name}</p>
                            <p>{character}</p>
                        </li>
                    ))}
            </ul>
        );
    }
};


Cast.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Cast;