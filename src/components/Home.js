/* eslint-disable no-undef */
import React from 'react';
import firebase from 'firebase';
import Login from './Login';
import Navbar from './NavBar';
import { firebaseApp } from '../base';



class Home extends React.Component {


  authHandler = async (authData) => {
    console.log(authData);
  };

  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  };


  render() {
    return (
      <div className="badger-sett">
        <Navbar />
        <Login authenticate ={this.authenticate} />
      </div>
    );
  }

}

export default Home;
