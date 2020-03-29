import React from 'react';
import {
    AwesomeButtonSocial,
  } from 'react-awesome-button';
  import "react-awesome-button/dist/styles.css";
  import logo from "../logo.png"
//import Proptypes from 'prop-types';

const Login = (props) => (
    <React.Fragment>
        <nav>

            {props.uid ? (
                <section>
                    <h1>Welcome {props.name}</h1>
                    <h3>Team news</h3>
                    <p>Here is some Badger news from the Badgers.</p>
                    <p>Head to the Availability tab and update your attendance for upcoming sessions.</p>
                    <p>Check out upcoming lineups on the Lineups tab</p>
                </section>
            ) : ( <div className="login">
                    <div className="login-buttons">
                        <img alt="BadgerSett logo" src={logo}/>
                        <AwesomeButtonSocial
                            className="facebook-aws"
                            type="facebook"
                            icon="true"
                            onPress={() => props.authenticate("Facebook")}
                            >
                            Log in with Facebook
                        </AwesomeButtonSocial>
                    </div>
                    </div>
                )}
        </nav>
    </React.Fragment>
);

// Login.propTypes = {
//     authenticate: Proptypes.func.isRequired
// };

export default Login;