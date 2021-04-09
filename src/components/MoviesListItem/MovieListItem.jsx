import { Link, withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import styles from './MovieListItem.module.css'
class MovieListItem extends Component {

    

    render() {
    
        
      return (
            <li>
              <Link
                  
                to={{
                    pathname: `/movies/${this.props.id}`,
                    state: { from: this.props.location },
                    
                }} className={styles.link}>
                {this.props.onTitle}
            </Link>
            </li>
        )
    }
}
MovieListItem.defaultProps = {
    onTitle: '???',
    
  };
export default withRouter(MovieListItem) 