import { Component } from 'react';
import ReviewsList from '../ReviewsList';
import { getReviewsToMovie } from '../../services/apiMovies';

class Reviews extends Component {
    state = {
        reviews: []
    };
    async componentDidMount() {
        const { movieId } = this.props.match.params;
        try { 
            const response = await getReviewsToMovie(movieId);
            this.setState({
                reviews: response.results,
            });
        } catch (error) {
        alert(error);
        };
    };
    render() {
        const { reviews } = this.state;
        return (
                <ReviewsList onData={reviews} />
        );
    };
};

export default Reviews;