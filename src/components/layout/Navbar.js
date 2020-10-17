import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; //impt

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <Link to='/home'>
          <i className={icon}></i> {title}
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

// class Navbar extends Component {
//   static defaultProps = {
//     title: 'ContribStats',
//     icon: 'fab fa-github'
//   };

//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired
//   };

//   render() {
//     return (
//       <nav className='navbar bg-primary'>
//         <h1>
//           <i class={this.props.icon}></i> {this.props.title}
//         </h1>
//       </nav>
//     );
//   }
// }

Navbar.defaultProps = {
  title: 'ContribStats',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
