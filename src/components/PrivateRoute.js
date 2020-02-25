import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'

const PrivateRouteA = ({ component: Component, uid, ...rest }) => (
          
  <Route {...rest} render={(props) => (
    {uid}
      ? <Component {...props} uid={uid} />
      : <Redirect to='/xx' />
  )} />
)


class PrivateRoute extends React.Component {
    render() {
      
       
        return (
          <PrivateRouteA uid={this.uid} />   
         
        )
    }   
}

export default PrivateRoute;