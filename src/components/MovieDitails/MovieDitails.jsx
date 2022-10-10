import styles from './MovieDitails.module.css';
import defImg from "../../images/def.img.svg";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const MovieDitails = ({ genres, title, overview, vote_average, poster_path, release_date, onHandleGoBack }) => {

  const img = poster_path
    ?
    `https://image.tmdb.org/t/p/original/${poster_path}`
    :
    defImg;
  const result = vote_average * 10
  const releseData = Number.parseInt(release_date)
  const genre = genres ? genres.map(ganre => (
    ganre.name + ' '
  )) : 'no genres';

  return (
    <div className={styles.wrap}>
      <div >
        <button className={styles.btn} type='button' onClick={onHandleGoBack} > <ArrowBackIcon fontSize="large" /> </button>
        <img className={styles.img} src={img} alt={title} />
      </div>
      <div className={styles.aboutMovieContainer}>
        <h3 className={styles.text} >{title} ({releseData})</h3>
        <p>User Score: {result}%</p>
        <h3 className={styles.text}>Overview</h3>
        <p>{overview}</p>
        <h3 className={styles.text}>Genres</h3>
        <p className={styles.list}>  {genre}</p>
      </div>
    </div>
  );
};

MovieDitails.defaultProps = {
  overview: 'No overview',
  vote_average: 0,
  release_date: 0,
};

export default MovieDitails;