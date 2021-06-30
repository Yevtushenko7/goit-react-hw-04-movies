import React from "react";

const MovieDetails = ({
    title,
    poster,
    genres,
    date,
    overview,
    average
}) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
            <ul>{genres && genres.map((i) => <li key={i.id}>{i.name}</li>)}</ul>
            <ul>
                <li>
                    <span>Release date:</span> {date}
                </li>
                <li>
                    Rating: <span>{average}</span>
                </li>
            </ul>
            <p>
                <span>Overview:</span> {overview}
            </p>
            
        </div>
    )
}



export default MovieDetails;