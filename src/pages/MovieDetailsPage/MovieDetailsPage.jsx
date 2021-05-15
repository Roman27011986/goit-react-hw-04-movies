import React, { Component,lazy, Suspense } from 'react';
import { Route,  Switch} from 'react-router-dom';
import {getMovieDitails} from '../../services/apiMovies'
import MovieDitails from '../../components/MovieDitails'
import routes from '../../routes'
import NavigatonMovDit from '../../components/Navigation/NavigatonMovDit'


const Cast = lazy(() =>
  import('../../components/Cast/Cast.jsx' /* webpackChunkName: "Cast" */),
);
const Reviews = lazy(() =>
  import('../../components/Reviews/Reviews.jsx' /* webpackChunkName: "Reviews" */),
);


class MovieDetailsPage extends Component  {
    state = {
        movie: []
    };

    async componentDidMount() {
        const { movieId } = this.props.match.params
        try{
            const { data } = await getMovieDitails(movieId)
            console.log(data);
         this.setState({
            movie:data
         })
        } catch (err) {
            alert(err);
        };
    };

    componentWillUnmount() {
        this.setState({
            movie: []
            
        });
    };
    
    handleGoBack = () => {
        const { location } = this.props
        const { history } = this.props
       
        history.push(location?.state?.from || routes.home)
    };

    
    render() {
        const { movie } = this.state;
        
        return (
            <>
                <MovieDitails {...movie} onHandleGoBack={this.handleGoBack} />
                <NavigatonMovDit />
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Switch>
                        <Route path={`${this.props.match.path}/cast`} component={Cast} />
                        <Route path={`${this.props.match.path}/reviews`} component={Reviews} />
                    </Switch>
                </Suspense>
            </>
        );
    };
};



export default MovieDetailsPage