import React, { Component } from "react";
import ApiMovie from "../../service/ApiMovie";

class Reviews extends Component {
    state = {
        reviews: null,
    }

    async componentDidMount() {
        const { id } = this.props
      if (id) {
      const reviews = await ApiMovie
        .getMovieById(id, '/reviews')
        .then(res => res.data.results);
      this.setState({ reviews });
    }
    
    }

    render() {
        const { reviews } = this.state

        return (
            
            <ul>
        {reviews && reviews.length > 0
          ? reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h2>{author}</h2>
                <p>{content.slice(0, 500)}</p>
                
              </li>
            ))
          : "Sorry no Info"}
      </ul>
        )
    }
}



export default Reviews;