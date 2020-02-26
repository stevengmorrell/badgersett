import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'




 const PrivateRoutea = ({ component: Component, uid, path }) => (
          
            <Route exact path={path} render={(props) => (
              uid
                ? <Component {...props} />
                : <Redirect to='/xx' />
            )} />
          )
 

export default function PrivateRoute (props) {
 
        return (
          
          <PrivateRoutea 
            {...props}
          />      
        )
    }   


