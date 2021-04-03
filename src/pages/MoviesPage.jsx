import axios from 'axios';
import React, { Component } from 'react';
import Searchbar from '../components/SearchBar'
import MoviesList from '../components/MoviesList'
class MoviesPage extends Component {

    state = {
    
        serchMovies:[]
        
    }

   onChangeQuery = (query) => {
          axios
             .get(`/search/movie/?api_key=0900e674aa431a5cac8b8b166be20d60&query=${query}`).then(
               response=>this.setState({serchMovies:response.data.results})
           )
        }

    render() {
        return (
            <>
            <h1>MoviesPage</h1>
                <Searchbar onSubmit={this.onChangeQuery} />
                <MoviesList onMovies={this.state.serchMovies} url={ this.props.match.url}/>
                
            </>
        )
    }
}

export default MoviesPage