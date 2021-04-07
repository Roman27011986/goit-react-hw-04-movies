
import React, { Component } from 'react';
import MoviesList from '../../components/MoviesList'
import { getTrendsMovies } from '../../services/apiMovies'
import styles from './HomePage.module.css'



class HomePage extends Component {

    state = {
        movies:[]
    }

  async componentDidMount() {
       const {data} = await getTrendsMovies()
       this.setState({ movies: data.results })
    }

    render() {
       
        const {movies} = this.state
        return (
            <div className={styles.wrap}>
                <h2 className={styles.text}>Trending today</h2>
                <MoviesList onMovies={movies}/>
                
                </div>
        )
    }
  
}
    


export default HomePage