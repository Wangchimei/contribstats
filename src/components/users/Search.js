import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  // CONTEXT
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  // HOOK: [state, a function to set state] = default value
  const [searchQuery, setSearchQuery] = useState('');

  // Refactor: no longer need "this.setState", but "setSearchQuery(value)"
  const handleChange = (e) => setSearchQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery === '') {
      alertContext.setAlert('Please provide a value to search.', 'light');
    } else {
      githubContext.searchUsers(searchQuery);
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
          {githubContext.users.length > 0 && (
            <button
              type='button'
              className='btn btn-light'
              onClick={githubContext.clearUsers}
            >
              Clear
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
