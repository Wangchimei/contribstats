import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  // async componentWillMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `http://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });

  // axios.get('http://api.github.com/users').then((res) => {
  //   this.setState({ users: res.data });
  // });
  // }

  searchUsers = async (query) => {
    console.log(query);
    this.setState({ loading: true });
    const res = await axios.get(
      `http://api.github.com/search/users?q=${query}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    //* WITHOUT JSX
    // return React.createElement(
    //   'div',
    //   { class: 'App' },
    //   React.createElement('h1', null, 'Title')
    // );

    //* WITH JSX
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
