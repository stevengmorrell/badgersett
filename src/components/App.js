/* eslint-disable no-undef */
import React from 'react';
import firebase from 'firebase';
import Login from './Login';
import Navbar from './NavBar';
import base, { firebaseApp } from '../base';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Availability from './Availability';
import Lineup from './Lineup';
import Settings from './Settings';

class App extends React.Component {

  state = {
    uid: null,
    name: null,
  }

  componentDidMount= () => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.setState({
          uid: user.uid,
          name: user.displayName
        })
        // ...
      } else { 
        // User is signed out.
        console.log("No user")
      }
    })
  };

 

  authHandler = async (authData) => {

    // 1. Set User ID
    const uid = authData.user.uid;
    
    
    this.setState({
      uid: uid
    });

    // 2. Look up user in the firebase database
    // await will push name of user to user check, otherwise fetch will return the promise
    const usercheck =  await base.fetch(`BadgerSett/users/${uid}`, { context: this }) 
    // 3. If user does not exist
    console.log(usercheck);
     if (usercheck.email) {
      const name =  await base.fetch(`BadgerSett/users/${uid}/name`, { context: this }) 
      const role =  await base.fetch(`BadgerSett/users/${uid}/role`, { context: this }) 
      const pos1 =  await base.fetch(`BadgerSett/users/${uid}/Pos1`, { context: this }) 
      const pos2 =  await base.fetch(`BadgerSett/users/${uid}/Pos2`, { context: this }) 
      this.setState({
        name,
        role,
        pos1,
        pos2,
      });

      console.log("user exists")
      } 
      else { 
        // Create user
        this.ref = base.post(`BadgerSett/users/${uid}`, {
        data: { name: authData.uid.displayName, 
                email: authData.uid.email,
                role: "unauthorised",
                Pos1: "notset",
                Pos2: "notset"
              }
      });
     
      }
  }
    

  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  };

  signOut = () => {firebase.auth().signOut().then(function() {
     
        localStorage.clear();
        window.location.href = '/';
    
  }).catch(function(error) {
    // An error happened.
  });
}


  render() {
    return (
        <div className="badger-sett">
         <Router>
         <>
          <Navbar 
            name = {this.state.name}
            signOut = {this.signOut}
          />
        
           <Switch>
              <Route exact path="/" render={(props) => <Login {...props} authenticate = {this.authenticate} name = {this.state.name} uid = {this.state.uid} />}
              />
              <Route exact path="/availability" render={(props) => <Availability {...props} name = {this.state.name} uid = {this.state.uid} />}/>
              <Route exact path="/lineups" render={(props) => <Lineup {...props} name = {this.state.name} uid = {this.state.uid} />}/>
              <Route exact path="/settings" render={(props) => <Settings {...props} name = {this.state.name} uid = {this.state.uid} />}/>
              <Route component={NotFound} />
            </Switch>
            </>
          </Router>
        </div>
    );
  }

}

export default App;
