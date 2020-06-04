import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialStateForUsers } from './actions/shared';
import { handleInitialStateForQuestions } from './actions/shared';
import RoutesComponent from './components/RoutesComponent'
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


const {isLogged}=this.props

    return (
      <div>
        <React.Fragment>
          <Navbar />
          <RoutesComponent isLogged={isLogged} />
        </React.Fragment>

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
