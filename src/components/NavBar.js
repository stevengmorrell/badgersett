import React from 'react';


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
                    </ul>
                </div>
                <div className="nav-right">
                    <h3>Tom Wallis</h3>
                    <h4>Settings</h4>
                    <h4>Log Out</h4>
                </div>
            </div>
        )
    }   
}

export default NavBar;