import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'




 const PrivateRoutea = ({ component: Component, ...rest }) => (
          
            <Route {...rest} render={(props) => (
              props.uid
                ? <Component {...props} />
                : <Redirect to='/xx' />
            )} />
          )


export default function PrivateRoute () {
    
        return (
          <PrivateRoutea />      
        )
    }   


