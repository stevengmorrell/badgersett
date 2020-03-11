import React from 'react';
import {
    AwesomeButtonSocial,
  } from 'react-awesome-button';
  import "react-awesome-button/dist/styles.css";
//import Proptypes from 'prop-types';

const Login = (props) => (
    <React.Fragment>
        <nav className="login">

            {props.uid ? (
                <>
                    <h2>Welcome {props.name}</h2>
                    <h3>Team news</h3>
                    <p>Here is some Badger news from the Badgers.</p>
                    <p>Head to the Availability tab and update your attendance for upcoming sessions.</p>
                    <p>Check out upcoming lineups on the Lineups tab</p>
                </>
            ) : (
                    <div>
                        <h3>Welcome! Please log in below</h3>
                        <AwesomeButtonSocial
                            className="facebook"
                            type="facebook"
                            icon="true"
                            onPress={() => props.authenticate("Facebook")}
                            >
                            Log in with Facebook
                        </AwesomeButtonSocial>
                    </div>
                )}
        </nav>
    </React.Fragment>
);

// Login.propTypes = {
//     authenticate: Proptypes.func.isRequired
// };

export default Login;