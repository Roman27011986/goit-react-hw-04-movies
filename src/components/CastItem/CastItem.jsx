import styles from './CastItem.module.css';
import defImg from "../../images/def.img.svg";

const CastItem = ({ onProfilePath, onName, onChar }) => {
  return (
    <li className={styles.item}>
      <img className={styles.img} src={onProfilePath ? `https://image.tmdb.org/t/p/original/${onProfilePath}` : defImg} alt={onName} />
      <p className={styles.text}>{onName} as {onChar}</p>
    </li>
  )
};

export default CastItem;