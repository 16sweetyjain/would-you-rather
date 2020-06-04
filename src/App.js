import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { handleInitialStateForUsers } from './actions/shared';
import { handleInitialStateForQuestions } from './actions/shared';
import SignIn from './components/SignInComponent'
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Navbar from './components/Navbar';

class App extends Component {

  constructor(props) {
    super(props)



  }


  componentDidMount() {
    this.props.dispatch(handleInitialStateForQuestions());
    this.props.dispatch(handleInitialStateForUsers());


  }

  render() {
   
    
    const SignInComponent = () => {
      return (
        <SignIn />
      )

    }

    return (
      <div>
  
    < Navbar/>


      </div>


    );
  }
}






export default connect()(App);
