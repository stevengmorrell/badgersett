import React from 'react';
//import Proptypes from 'prop-types';

const Login = (props) => (
    <nav className="login">
        <h3>Welcome! Please log in below</h3>
        <button
            className="facebook"
            onClick={() => props.authenticate("Facebook")}
        > 
            Log in with Facebook
        </button>
    </nav>
);

// Login.propTypes = {
//     authenticate: Proptypes.func.isRequired
// };

export default Login;