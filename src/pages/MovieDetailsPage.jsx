import React, { Component } from 'react';
import axios from 'axios';
class MovieDetailsPage extends Component  {

    state = {
        poster_path: '',
        title: '',
        overview: '',
        genres: [],
        release_date: '',
        img:''
    }

    async componentDidMount() {
       const {movieId} = this.props.match.params
        const response = await axios.get(`movie/${movieId}?api_key=0900e674aa431a5cac8b8b166be20d60`)
        this.setState({ ...response.data })
        
        const respons = await axios.get(`https://image.tmdb.org/t/p/original/${this.state.poster_path}`)
        console.log()
        this.setState({ img: respons.config.url})
        
    }

    
    render() {
       const genres = this.state.genres.reduce((acc, { name }) => (
        `${acc} ${name}`
        ),'')
      
        return (
            <>
                <h1>MovieDetailsPage</h1>
                <img src={this.state.img && this.state.img}  alt=""/>
                <p>{this.state.title} {Number.parseInt(this.state.release_date)}</p>
                <p>{this.state.overview }</p>
                <p>{genres }</p>
                </>
        )
    }
}

export default MovieDetailsPage