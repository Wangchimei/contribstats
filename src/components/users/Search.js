import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    searchQuery: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.searchQuery);
    // using props to pass text to the upper level (not recommended)
    this.props.searchUsers(this.state.searchQuery);
    this.setState({ searchQuery: '' }); // clear form
  };

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='searchQuery'
            placeholder='Enter Username to Search'
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
          <input
            type='submit'
            value='search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
