import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        <li>
          <NavLink to={routes.home} exact activeClassName={styles.active} className={styles.link}>Home</NavLink>
        </li>
        <li>
          <NavLink to={routes.movies} activeClassName={styles.active} className={styles.link}>Movies</NavLink>
        </li>
      </ul>
    </nav>
  )
};
export default Navigation;