import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, clearUsers, showClear, setAlert }) => {
  // HOOK: [state, a function to set state] = default value
  const [searchQuery, setSearchQuery] = useState('');

  // Refactor: no longer need "this.setState", but "setSearchQuery(value)"
  const handleChange = (e) => setSearchQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery === '') {
      setAlert('Please provide a value to search.', 'light');
    } else {
      searchUsers(searchQuery);
      setSearchQuery('');
    }
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='searchQuery'
          placeholder='Enter Username to Search'
          value={searchQuery}
          onChange={handleChange}
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
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired
};
export default Search;
