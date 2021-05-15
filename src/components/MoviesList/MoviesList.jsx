import {   withRouter } from 'react-router-dom';
import MoviesListItem from '../MoviesListItem/MovieListItem'


import styles from './MoviesList.module.css'

const MoviesList = ({ onMovies }) => {

    return (

        <ul className={styles.list}>
        
            {onMovies.map(({ id, original_title ,name,backdrop_path}) => (
                
                < MoviesListItem
                    key={id}
                    onTitle={original_title ?original_title :name}
                    id={id}
                    onImg={backdrop_path}
                    
                />
            ))}
        </ul>
    )
}


export default withRouter(MoviesList) 