import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../logo.png"

// add an if based on auth to display a separate nav bar depending on auth status,
// public, private, privatecoach
class NavBar extends React.Component {



    render() {

        return (

            <header className="header">
                <div>

                    {this.props.name ? (
                        <ul>
                            <li><NavLink to="/">
                                <img alt="BadgerSett logo" src={logo} />
                            </NavLink></li>
                            <li><NavLink to='/availability' activeClassName='navActive'>Availability</NavLink></li>
                            <li><NavLink to='/lineups' activeClassName='navActive'>Lineups</NavLink></li>
                            <li><NavLink to='/eventmanagement' activeClassName='navActive'>Events</NavLink></li>
                            <li><NavLink to='/selection' activeClassName='navActive'>Selection</NavLink></li>
                            <li><NavLink to='/settings' activeClassName='navActive'>Settings</NavLink></li>
                            <li><NavLink to="/" onClick={this.props.signOut}>Log Out</NavLink>
                            </li>
                        </ul>
                    ) : (
                            <div />
                        )}

                </div>
            </header>

        )
    }
}

export default NavBar;


