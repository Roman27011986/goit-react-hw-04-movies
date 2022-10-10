import { Component } from 'react';
import MoviesList from '../../components/MoviesList';
import { getTrendsMovies } from '../../services/apiMovies';
import styles from './HomePage.module.css';

class HomePage extends Component {
    state = {
        movies: [],
        filter: ''
    };

    async componentDidMount() {
        try {
            const { data } = await getTrendsMovies()
            this.setState({ movies: data.results })
        } catch (err) {
            alert(err);
        };
    };

    handleOnChange = (e) => {
        this.setState({ filter: e.target.value })

    };

    getVisibleMovies = () => {
        const { movies, filter } = this.state;
        switch (filter) {
            case 'Popular':
                return [...movies].sort((a, b) => (
                    b.vote_average - a.vote_average
                ))
            default:
                return movies
        }
    };

    render() {
        const filteredMovies = this.getVisibleMovies();
        return (
            <div className={styles.wrap}>
                <h2 className={styles.text}>Trending today</h2>
                <select
                    name="image"
                    onChange={this.handleOnChange}
                >
                    <option value="">----</option>
                    <option value="Popular">Top Rating</option>
                </select>
                <MoviesList onMovies={filteredMovies} />
            </div>
        );
    };
};

export default HomePage;