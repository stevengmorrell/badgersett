import React from 'react';
//import Proptypes from 'prop-types';

const Login = (props) => (
    <React.Fragment>
        <nav className="login">

            {props.uid ? (
                <h2>Welcome {props.name}</h2>
            ) : (
                <div>
                    <h3>Welcome! Please log in below</h3>
                    <button
                        className="facebook"
                        onClick={() => props.authenticate("Facebook")}
                        > 
                        Log in with Facebook
                    </button>
                </div>
            )}
        </nav>
    </React.Fragment>
);

// Login.propTypes = {
//     authenticate: Proptypes.func.isRequired
// };

export default Login;