import { Link, withRouter } from 'react-router-dom';

const MovieSearchList = ({ movies, location }) => {
    return movies.map(({ id, title }) => (
        <li key={id}>
            <Link
                to={{
                    pathname: `/movies/${id}`,
                    state: {
                        from: location,
                    },
                }}
            >
                {title}
            </Link>
        </li>
    ))
};

export default withRouter(MovieSearchList);