import React from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";

import logo from './images/logo.svg';

class Navbar extends React.Component {
  state = {
    open: false
  };
  onToggleClick = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    return (
      
        <div className="nav-bar">
        <div className='nav-center'> 
          <div className="nav-header">
          <Link to='/'>
          <img src={logo} alt="Beach Resort"/>
          </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.onToggleClick}
            >
              <FaAlignJustify className="Fa-icon"></FaAlignJustify>
            </button>
            
          </div>
          <ul
              className={this.state.open ? "nav-links show-nav" : "nav-links"}
            >

              <li>
                <Link to="/home">HOME</Link>
              </li>
              <li>
                <Link to="/rooms">ROOMS</Link>
              </li>
              <li>
                <Link to="/register">ACCOUNT</Link>
              </li>
            
            </ul>
        </div>
      </div>   
    );
  }
}

export default Navbar;
