import {  Link } from 'react-router-dom';
const MovieListItem = ({ onTitle, id ,url}) => {
    
    return (
        <li><Link to={`${url}/${id}`}>{onTitle}</Link></li>
      
    )
}

export default MovieListItem