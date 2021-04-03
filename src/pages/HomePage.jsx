import axios from 'axios';
import {  Link } from 'react-router-dom';
import React, {Component} from 'react';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
class HomePage extends Component {

    state = {
        movies:[]
    }

   async componentDidMount() {
       const { data } = await axios.get(`/movie/popular/?api_key=0900e674aa431a5cac8b8b166be20d60&page=1`)
       this.setState({movies:data.results})
        console.log(data)
    }

    render() {
       
        const {movies} = this.state
        return (
            <>
                <h1>Home</h1>
                <ul>
                    {movies.map((movie) => (
                        <li key={movie.id}><Link to={`/`}>{movie.original_title }</Link></li>
                    ))}
                </ul>
                </>
        )
    }
  
}
    


export default HomePage