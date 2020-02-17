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

  componentDidMount= () => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.setState({
          uid: user.uid
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
      uid: uid,
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


  render() {
    return (
      <div className="badger-sett">
        <Navbar 
            name = {this.state.name}
        />
          {this.state.uid ? (
            <h2>Welcome {this.state.name}</h2>
          ) : (
            <Login authenticate ={this.authenticate} />
          )}


      </div>
    );
  }

}

export default Home;
