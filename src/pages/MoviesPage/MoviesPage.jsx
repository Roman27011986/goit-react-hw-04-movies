import { Component } from 'react';

import Searchbar from '../../components/SearchBar';
import MoviesList from '../../components/MoviesList';

import { getMoviesByName } from '../../services/apiMovies';

class MoviesPage extends Component {
    state = {
        serchMovies: [],
        query: ''
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search).get('query');
        query ?
            this.setState({ query: query })
            :
            this.setState({ query: '' })
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.query !== this.state.query) {
            this.fetchMovies()
        };
    };


    onSubmitQuery = (value) => {
        this.setState({ query: value })
        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `query=${value}`,
        });
    };

    fetchMovies = () => {
        const { query } = this.state;
        getMoviesByName(query)
            .then(({ data }) =>
                this.setState({
                    serchMovies: data.results
                })
            ).catch(error => alert(error))
    };

    render() {
        return (
            <>
                <h1 style={{
                    textAlign: 'center',
                    padding: '10px'
                }}>MoviesPage</h1>
                <Searchbar onSubmit={this.onSubmitQuery} />
                <MoviesList onMovies={this.state.serchMovies} />

            </>
        );
    };
};

export default MoviesPage;





