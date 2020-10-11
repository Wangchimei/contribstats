import React from 'react';
import PropTypes from 'prop-types';

// Class component
// - needs render()
// - can access to this keyword
// - can access to state

// Functional component
// - only need return
// - no access to this.props but takes in from parameter

const UserItem = ({ user: { id, login, avatar_url, html_url } }) => {
  // to avoid repeating "this.state", destructure!
  // const { id, login, avatar_url, html_url } = props.user;

  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt={id}
        className='round-img'
        style={{ width: '100px' }}
      />
      <h3>{login}</h3>
      <a href={html_url} className='btn btn-dark btn-sm my-1'>
        More
      </a>
    </div>
  );
};

UserItem.prototype = {
  user: PropTypes.object.isRequired
};

export default UserItem;
