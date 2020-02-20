import React from 'react';
import { NavLink } from 'react-router-dom';



// add an if based on auth to display a separate nav bar depending on auth status,
// public, private, privatecoach
class NavBar extends React.Component {
    render() {
        return (
          
                <div className="header">
                    <div className="nav-left">
                        <h1>
                            <a href="/">BadgerSett</a>
                        </h1>
                            <ul>
                                <li><NavLink to='/' activeClassName='navActive'>Home</NavLink></li>
                                <li><NavLink to='/availability' activeClassName='navActive'>Availability</NavLink></li>
                                <li><NavLink to='/lineups' activeClassName='navActive'>Lineups</NavLink></li>
                                {/* coach options to be inserted here */}
                            </ul>
                    </div>
                    <div className="nav-right">
                        <h5>{this.props.name}</h5>
                        <h5>Settings</h5>
                        <h5>Log Out</h5>
                    </div>
                </div>
                
        )
    }   
}

export default NavBar;


