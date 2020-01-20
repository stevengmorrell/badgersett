/* eslint-disable no-undef */
import React from 'react';
import firebase from 'firebase';
import Login from './Login';
import Navbar from './NavBar';
import  base, { firebaseApp } from '../base';



class Home extends React.Component {

  state = {
    uid: null
  }


  authHandler = async (authData) => {

    // 1. Set User ID
    const user = authData.user.uid;
    
    this.setState({
      uid: user
    });

    // 2. Look up user in the firebase database
    // await will push name of user to user check, otherwise fetch will return the promise
    const usercheck =  await base.fetch(`BadgerSett/users/${user}`, { context: this }) 
    //console.log(usercheck)
    // 3. If user does not exist
    console.log(usercheck);
     if (usercheck.email) {
      
      console.log("user exists")
      } 
      else { 
        // Create user
        this.ref = base.post(`BadgerSett/users/${user}`, {
        data: { name: authData.user.displayName, 
                email: authData.user.email,
                status: "Unauthorised",
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


  render() {
    return (
      <div className="badger-sett">
        <Navbar 
          uid = {this.state.uid}
        />
        <Login authenticate ={this.authenticate} />
      </div>
    );
  }

}

export default Home;
