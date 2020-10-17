import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    searchQuery: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchQuery === '') {
      this.props.setAlert('Please provide a value to search.', 'light');
    } else {
      /* using props to pass text to the upper level (not recommended) */
      this.props.searchUsers(this.state.searchQuery);
      this.setState({ searchQuery: '' }); /* clear form */
    }
  };

  render() {
    const { clearUsers, showClear } = this.props;
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
          <div className='text-center'>
            <button type='submit' className='btn btn-dark'>
              Search
            </button>
            {showClear && (
              <button
                type='button'
                className='btn btn-light'
                onClick={clearUsers}
              >
                Clear
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
