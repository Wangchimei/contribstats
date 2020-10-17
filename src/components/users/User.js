//rce
import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';

const User = ({ user, repos, loading, getUser, getRepos, match }) => {
  // useEffect will be trigger in any lifecycle, to mimic componentDidMount, use a [] as second function to make it only run once. if using [repos], means it triggers when repos changed. Using "eslint-disable-next-line" to get rid of the warning.
  useEffect(() => {
    getUser(match.params.login);
    getRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back
      </Link>
      Hireable:{' '}
      {user.hireable ? (
        <i className='fas fa-check text-success'></i>
      ) : (
        <i className='fas fa-time-circle text-danger'></i>
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={user.avatar_url}
            alt={user.login}
            className='round-img'
            style={{ width: '150px' }}
          />
          <h1>{user.name}</h1>
          <p>Location: {user.location}</p>
        </div>
        <div>
          {user.bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{user.bio}</p>
            </Fragment>
          )}
          <a href={user.html_url} className='btn btn-dark my-1'>
            View Profile on Github
          </a>
          <ul>
            <li>
              {user.login && (
                <Fragment>
                  <strong>Username: {user.login}</strong>
                </Fragment>
              )}
            </li>
            <li>
              {user.company && (
                <Fragment>
                  <strong>Company: {user.company}</strong>
                </Fragment>
              )}
            </li>
            <li>
              {user.blog && (
                <Fragment>
                  <strong>
                    Website:{' '}
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href={user.blog}
                    >
                      {user.blog}
                    </a>
                  </strong>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {user.followers}</div>
        <div className='badge badge-success'>Following: {user.following}</div>
        <div className='badge badge-danger'>
          Public Repos: {user.public_repos}
        </div>
        <div className='badge badge-dark'>
          Public Gists: {user.public_gists}
        </div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  getUser: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired
};

export default User;
