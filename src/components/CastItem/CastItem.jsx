import styles from './CastItem.module.css'
import defImg from "../../images/def.img.svg"
const CastItem = ({ onProfilePath, onName, onChar }) => {
    return (
                  <li >
                    <img className={styles.img} src={onProfilePath ? `https://image.tmdb.org/t/p/original/${onProfilePath}` : defImg} alt={ onName}/>
                   <p className={styles.text}>{onName }</p>
                    <p className={styles.text}>{onChar }</p>
                 </li>
    )
}

export default CastItem