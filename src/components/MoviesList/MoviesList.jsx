import {   withRouter } from 'react-router-dom';
import MoviesListItem from '../MoviesListItem/MovieListItem'
import styles from './MoviesList.module.css'

const MoviesList = ({ onMovies }) => {

    
    
    return (

        <ul className={styles.list}>
        
            {onMovies.map(({ id, title }) => (
                
                < MoviesListItem
                    key={id}
                    onTitle={title}
                    id={id}
                    
                    
                />
            ))}
        </ul>
    )
}


export default withRouter(MoviesList) 