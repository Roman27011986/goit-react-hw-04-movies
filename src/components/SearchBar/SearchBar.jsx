import { Component } from 'react';
import Button from '@material-ui/core/Button';

import InputBase from '@material-ui/core/InputBase';
import { withStyles,  fade } from '@material-ui/core/styles';
import styles from './SearchBar.module.css';

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }))(InputBase);

class Searchbar extends Component {
  state = {
    query: ''
  };
    
  handleChange = event => {
    this.setState({ query: event.currentTarget.value })
  };
  hendleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query)
       
  };
    render() {
      return (
        <form className={styles.form} onSubmit={this.hendleSubmit}>
          <BootstrapInput type="text"
            label="serch movies by name"
            placeholder="enter movie name"
            onChange={this.handleChange}
            value={this.state.query}
            className={styles.serch}
            autoComplete="off"
            autoFocus
          />
          <Button type='submit' variant="contained" color="primary">Search</Button>
        </form>
      );
  };
};

export default Searchbar;