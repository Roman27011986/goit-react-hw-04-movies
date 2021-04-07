import React, { Component } from 'react';
import { getReviewsToMovie } from '../../services/apiMovies'
import ReviewsList from '../../components/ReviewsList'

class Reviews extends Component {

    state = {
        reviews:[]
   }

    async componentDidMount() {
        const {movieId} = this.props.match.params
        const response = await getReviewsToMovie(movieId)
        
        this.setState({
            reviews: response.results,
        })
       
        
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