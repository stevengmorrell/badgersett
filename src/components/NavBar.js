import React from 'react';

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
                        <li><a href='/'>Home</a></li>
                        <li><a href='/availability'>Availability</a></li>
                        <li><a href='/lineups'>Lineups</a></li>
                        {/* coach options to be inserted here */}
                    </ul>
                </div>
                <div className="nav-right">
                    <h5>Tom Wallis</h5>
                    <h5>Settings</h5>
                    <h5>Log Out</h5>
                </div>
            </div>
        )
    }   
}

export default NavBar;