import React from 'react';
import {Link} from 'react-router-dom'



class Header extends React.Component {
  render(){
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container">
            <div className="navbar-header">
           
            <a className="navbar-brand" href="#">Project name</a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
                <li className="nav-item"><Link className='nav-link' to="/" >Home</Link></li>
                <li className="nav-item"><Link className='nav-link' to="/about" >About</Link></li>
                <li className="nav-item"><Link className='nav-link' to="/contact">Contact</Link></li>
            </ul>
            </div>
        </div>
        </nav>
      </div>
    );
  }
  
}

export default Header;
