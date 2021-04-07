import React, { Component } from 'react';
import { Route,  Switch} from 'react-router-dom';
import Cast from '../Cast/Cast'
import Reviews from '../Reviews/Reviews'
import {getMovieDitails} from '../../services/apiMovies'
import MovieDitails from '../../components/MovieDitails'
import routes from '../../routes'
import NavigatonMovDit from '../../components/Navigation/NavigatonMovDit'



class MovieDetailsPage extends Component  {

    state = {
        movie:[]
    }

    async componentDidMount() {
        const { movieId } = this.props.match.params
        
         const {data} = await getMovieDitails(movieId)
         
        this.setState({
            movie:data
            
            })
    }

    componentWillUnmount() {
        this.setState({
            movie:[]
            
            })
    }
    
    handleGoBack = () => {
        const { location } = this.props
        const { history } = this.props
       
        history.push(location?.state?.from || routes.home)
    }

    
    render() {
         
        
        const {movie} = this.state
        
        
        return (
            <>
                

                <MovieDitails {...movie} onHandleGoBack={this.handleGoBack} />
                 
                <NavigatonMovDit />
                
                <Switch>
                    
                    <Route  path={`${this.props.match.path}/cast`} component={Cast}/>
                    <Route path={`${this.props.match.path}/reviews`} component={Reviews} />
                    
                </Switch>
                </>
        )
    }
}



export default MovieDetailsPage