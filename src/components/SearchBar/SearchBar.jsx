import React, { Component } from 'react';

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
            <form onSubmit={this.hendleSubmit}>
                <input type="text"
                    onChange={this.handleChange}
                    value={this.state.query}
                />
                <button type='submit' >Search</button>
            </form>
        )
    }
}

export default Searchbar