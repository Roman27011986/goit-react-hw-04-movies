import MoviesListItem from '../MoviesListItem/MovieListItem';
import { withRouter } from 'react-router-dom';
import styles from './MoviesList.module.css';

const MoviesList = ({ onMovies }) => {
    return (
        <ul className={styles.list}>
            {onMovies.map(({ id, title,  poster_path,vote_average}) => (
                < MoviesListItem
                    key={id}
                    onTitle={title }
                    id={id}
                    onImg={poster_path}
                    onCompetetive={vote_average}
                />
            ))}
        </ul>
    );
};

export default withRouter(MoviesList);