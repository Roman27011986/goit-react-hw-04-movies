import styles from './MovieDitails.module.css'
const MovieDitails = ({ genres, original_title, overview, vote_average, poster_path, release_date,onHandleGoBack }) => {
     
    const result = vote_average * 10
    const releseData = Number.parseInt(release_date)
    const genre = genres ? genres.map(ganre => (
             ganre.name + ' '
        )) : 'no genres'

     return (
         <div className={styles.wrap}>
          <button className={styles.btn} type='button' onClick={onHandleGoBack} > &lArr; </button>
            <img className={styles.img} src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={original_title} />
               <div>
                    <h3 className={styles.text} >{original_title} ({releseData})</h3>
                    <p>User Score: {result}%</p>
                    <h3 className={styles.text}>Overview</h3>
                    <p>{overview}</p>
                    <h3 className={styles.text}>Genres</h3>
                    <p className={styles.list}>  {genre}</p>

                </div>
            
    </div>
   )
 }
export default MovieDitails