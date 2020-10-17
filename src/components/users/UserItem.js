import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Class component
// - needs render()
// - can access to this keyword
// - can access to state

// Functional component
// - only need return
// - no access to this.props but takes in from parameter

// to avoid repeating "this.state", destructure!
// const { id, login, avatar_url, html_url } = props.user;
const UserItem = ({ user: { id, login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt={id}
        className='round-img'
        style={{ width: '100px' }}
      />
      <h3>{login}</h3>
      <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
        More
      </Link>
    </div>
  );
};

UserItem.prototype = {
  user: PropTypes.object.isRequired
};

export default UserItem;
