import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { handleInitialStateForUsers } from './actions/shared';
import { handleInitialStateForQuestions } from './actions/shared';
import SignIn from './components/SignInComponent'
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
=======
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialStateForUsers } from './actions/shared';
import { handleInitialStateForQuestions } from './actions/shared';
import RoutesComponent from './components/RoutesComponent'
import Navbar from './components/Navbar';



>>>>>>> aff6c718d91de55108f9a11040cffb826318f028

class App extends Component {

  constructor(props) {
    super(props)



  }


  componentDidMount() {
    this.props.dispatch(handleInitialStateForQuestions());
    this.props.dispatch(handleInitialStateForUsers());


  }

  render() {
<<<<<<< HEAD
   
    
    const SignInComponent = () => {
      return (
        <SignIn />
      )

    }

    return (
      <div>
  
    < Navbar/>

=======


const {isLogged}=this.props

    return (
      <div>
        <React.Fragment>
         
          <RoutesComponent isLogged={isLogged} />
        </React.Fragment>
>>>>>>> aff6c718d91de55108f9a11040cffb826318f028

      </div>


    );
  }
}


function mapStateToProps({ authedUser }) {
  return {
      isLogged: authedUser === null
  }
}








export default connect(mapStateToProps)(App);
