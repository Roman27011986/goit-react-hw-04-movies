import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './MovieListItem.module.css';

class MovieListItem extends Component {
  render() {
    return (
      <li className={styles.item}>
        <Link
          to={{
            pathname: `/movies/${this.props.id}`,
            state: { from: this.props.location },
          }} >
          <img className={styles.img} src={`https://image.tmdb.org/t/p/original/${this.props.onImg}`} alt={this.props.onTitle} />
        </Link>
        <p className={styles.rating}><span className={styles.ratingItem}>{this.props.onCompetetive.toFixed(1)}</span></p>
        <p className={styles.title}>{this.props.onTitle}</p>
      </li>
    );
  };
};

export default withRouter(MovieListItem);