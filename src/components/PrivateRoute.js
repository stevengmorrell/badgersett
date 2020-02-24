import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'


class PrivateRoute extends React.Component {
    render() {

        const PrivateRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
              props.uid === true
                ? <Component {...props} />
                : <Redirect to='/' />
            )} />
          )
        return (
            
          <PrivateRoute />
                
        )
    }   
}

export default PrivateRoute;