import React from 'react';
import NavBar from './NavBar';


class Welcome extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <p>Welcome!</p>
            </React.Fragment>
        )
    }   
}

export default Welcome;