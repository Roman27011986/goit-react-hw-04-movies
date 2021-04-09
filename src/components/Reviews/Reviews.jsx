import React, { Component } from 'react';
import { getReviewsToMovie } from '../../services/apiMovies'
import ReviewsList from '../ReviewsList'

class Reviews extends Component {

    state = {
        reviews:[]
   }

    async componentDidMount() {
        const { movieId } = this.props.match.params
        try { 
        const response = await getReviewsToMovie(movieId)
        this.setState({
            reviews: response.results,
        })
    } catch (err) {
        alert(err);
      }
       
        
   }
    
    render() {

        const {reviews}=this.state
       
    return (
          
           <>
            <ReviewsList onData={ reviews}/> 
           
            </>
            
       
    )
    }    
    
}

export default Reviews