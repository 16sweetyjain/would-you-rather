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
import Logout from './components/Logout';
import QuestionDetails from './components/QuestionDetails';



class App extends Component {

  constructor(props) {
    super(props)



  }


  componentDidMount() {
    this.props.dispatch(handleInitialStateForQuestions());
    this.props.dispatch(handleInitialStateForUsers());


  }

  render() {
    // console.log(this.state.authUser);

    const HomeComponent = () => {
      return (
        <Home />
      )
    }
    const SignInComponent = () => {
      return (
        <SignIn />
      )

    }

    const CreateComponent = () => {
      return (
        <Create />
      );
    }

    const HomeiComponent = () => {
      return (<Homi />
      );
    }

    const LeaderboardComponent = () => {
      return (
        <Leaderboard user={this.state.authUser} />
      );
    }

    const LogoutComponent = () => {
      return (
        <Logout user={this.state.authUser} />
      );
    }

    const QuestionDetails=()=>{
      return(
        <QuestionDetails/>
      )
    }


    return (
      <div>

        <Switch>
          <Route exact path='/home' component={HomeComponent} />
          <Route exact path='/signIn' component={SignInComponent} />
          <Route exact path='/create' component={CreateComponent} />
          <Route exact path='/home_ans' component={HomeiComponent} />
          <Route exact path='/leaderboard' component={LeaderboardComponent} />
          <Route exact path='/logout' component={LogoutComponent} />
          <Route path='/questions/:id' component={QuestionDetails} />
          <Redirect to='/signIn' />


        </Switch>



      </div>


    );
  }
}






export default connect()(App);
