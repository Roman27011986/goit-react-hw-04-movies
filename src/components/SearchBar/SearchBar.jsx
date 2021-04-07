import React, { Component } from 'react';
import styles from './SearchBar.module.css'
class Searchbar extends Component {
    state = {
      query: ''
    }
    
    handleChange = event => {
        this.setState({query:event.currentTarget.value})
    }
    hendleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.query)
       
      }

    render() {
        return (
            <form className={styles.form} onSubmit={this.hendleSubmit}>
                <input type="text"
                    onChange={this.handleChange}
                    value={this.state.query}
                    className={styles.input}
                    placeholder="Search movies"
                    autoComplete="off"
                        autoFocus
                />
                <button type='submit' >Search</button>
            </form>
        )
    }
}

export default Searchbar