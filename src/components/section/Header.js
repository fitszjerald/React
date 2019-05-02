import React from 'react';
import {Link} from 'react-router-dom'



class Header extends React.Component {
  render(){
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
           
            <a className="navbar-brand" href="#">Project name</a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
                <li className="active"><Link to="/" >Home</Link></li>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            </div>
        </div>
        </nav>
      </div>
    );
  }
  
}

export default Header;
