import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { handleInitialStateForUsers } from './actions/shared';
import { handleInitialStateForQuestions } from './actions/shared';
import { Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import RoutesComponent from './components/RoutesComponent';

class App extends Component {




  componentDidMount() {
    this.props.dispatch(handleInitialStateForQuestions());
    this.props.dispatch(handleInitialStateForUsers());


  }

  render() {

console.log(this.props)
    const { isNotLogged } = this.props;
    return (
      <div>


        < Navbar />

        <Switch>
          <RoutesComponent isNotLogged={isNotLogged} />
        </Switch>




      </div>


    );
  }
}


function mapStateToProps({ authedUser }) {
  return {
    isNotLogged: authedUser === null
  }
}








export default connect(mapStateToProps)(App);
