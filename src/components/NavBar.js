import React from 'react';


class NavBar extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="nav-left">
                    <h1>
                        BadgerSett
                    </h1>
                    <span className="nav-item">Attendance</span>
                    <span className="nav-item">Line Ups</span>
                    <span className="nav-item">Playbooks</span>
                </div>
                <div className="nav-right">
                    <h3>Your Name</h3>
                    <h4>Settings</h4>
                    <h4>Log Out</h4>
                </div>
            </div>
        )
    }   
}

export default NavBar;