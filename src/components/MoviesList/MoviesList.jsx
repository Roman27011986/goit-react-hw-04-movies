import MoviesListItem from './MovieListItem'
const MoviesList = ({ onMovies,url }) => (
    <ul>
        {onMovies.map(movie => (
            < MoviesListItem
                key={movie.id}
                onTitle={movie.original_title}
                id={movie.id}
                url={url}
            />
        ))}
    </ul>
)
export default MoviesList