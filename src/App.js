
import './App.css';
import Dashboard from './components/dashboard';
import React from 'react';
import firebase from 'firebase';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/database';
import Routers from './components/routers';
import {BrowserRouter as Router, Redirect } from 'react-router-dom';
import "notiflix-react/dist/notiflix-react-1.4.0.css";


class App extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      isUserLoggedIn:false
    }



   }

   componentDidMount(){
    
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({
          isUserLoggedIn : true
        });
      }else{
        this.setState({
          isUserLoggedIn : false
        });
        console.log("user not found");
      }
    })

   }

  render(){
    if(this.state.isUserLoggedIn){
      return <Dashboard />
    }else {

    return (
      <div className="App">
        <Router>
          <Routers/>
          <Redirect to="/" />
        </Router>
      </div> 

    );
    }
  }
}


export default App;
