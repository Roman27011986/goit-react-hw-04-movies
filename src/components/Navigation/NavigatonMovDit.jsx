import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './Navigation.module.css'

class NavigatonMovDit extends Component {
 

    render() {

        const {location,match} = this.props
      
        return (
            <ul className={styles.box}>
            <li>
            <Link to={{
            pathname: `${match.url}/cast`,
             state: { from: location?.state?.from },
        }}>Cast</Link>
    
       </li>
            <li>
            <Link to={{
            pathname: `${match.url}/reviews`,
             state: { from: location?.state?.from  },
            }}>Reviews</Link>
        </li>
                
               
            </ul>
        )
    }
}

export default withRouter(NavigatonMovDit)  