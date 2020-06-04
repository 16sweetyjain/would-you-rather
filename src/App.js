import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './components/SignInComponent'
import { connect } from 'react-redux';
import { handleInitialStateForUsers } from './actions/shared';
import { handleInitialStateForQuestions } from './actions/shared';
import Home from './components/HomeComponent';
import Create from './components/CreateQuestion';
import Homi from './components/HomeForHome'
import Leaderboard from './components/Leaderboard';
import QuestionDetails from './components/QuestionDetails';
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




    const { isLogged } = this.props

    return (
      <div>

<Navbar/>
        <Switch>

          <RoutesComponent  />

         

        </Switch>



      </div>


    );
  }
}








export default connect()(App);
