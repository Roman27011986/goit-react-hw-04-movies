import React, { Component } from 'react';
import MoviesList from '../../components/MoviesList';
import { getTrendsMovies } from '../../services/apiMovies';
import styles from './HomePage.module.css';



class HomePage extends Component {

    state = {
        movies: [],
        filterGenre:27011986
    };

    async componentDidMount() {
    try {
        const { data } = await getTrendsMovies()
        this.setState({ movies: data.results })
    } catch (err) {
        alert(err);
        };
    };

    handleOnChange = (e) => {
        this.setState({ filterGenre: Number(e.target.value) })
        
    };

    getVisibleMovies = () => {
        const { movies, filterGenre } = this.state;
        if (filterGenre === 27011986) {
            return movies
        };
        return movies.filter(movie =>
            movie.genre_ids.includes(filterGenre)
        );
    };

    render() {
        
        const filteredMovies = this.getVisibleMovies();
      
        return (
            <div className={styles.wrap}>
                <h2 className={styles.text}>Trending today</h2>

        <select
                    name="image"
               onChange={this.handleOnChange}     
        >           <option value="27011986">All</option>
                    <option value="53">Thriller</option>
                    <option value="18">Drama</option>
                    <option value="28">Action</option>
          <option value="9648">Mystery</option>
        </select>
                <MoviesList onMovies={filteredMovies} />
            </div>
        );
    };
};
    


export default HomePage