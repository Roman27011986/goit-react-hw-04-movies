import React, { Component } from 'react';
// import PropTypes from "prop-types";
import CastList from '../../components/CastList'
import {getCast }from '../../services/apiMovies'


class Cast extends Component {

    state = {
        cast:[]
    }

    async componentDidMount() {
        const { movieId } = this.props.match.params
        try{
        const {data} = await getCast(movieId)
        this.setState({ cast: data.cast })
    } catch (err) {
        alert(err);
      }
   }
    
    render() {
            const {cast} = this.state
    return (
        <CastList onCast={ cast}/>
        )
    }    
    
}



export default Cast
