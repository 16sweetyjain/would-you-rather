import React, { Component } from 'react';
import './App.css';
import { handleInitialStateForUsers } from './actions/shared';
import { handleInitialStateForQuestions } from './actions/shared';
import Navbar from './components/Navbar';
import Home from './components/HomeComponent';
import { Route, Switch, Redirect } from 'react-router-dom';
import Create from './components/CreateQuestion';
import Leaderboard from './components/Leaderboard';
import QuestionDetails from './components/QuestionDetails';
import SignIn from './components/SignInComponent';
import { connect } from 'react-redux';



class App extends Component {




  componentDidMount() {
    this.props.dispatch(handleInitialStateForQuestions());
    this.props.dispatch(handleInitialStateForUsers());


  }

  render() {
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



    const LeaderboardComponent = () => {
      return (
        <Leaderboard />
      );
    }


    const QuestionDetailsComponent = () => {
      return (
        <QuestionDetails />
      )
    }

    const Root=()=>{
      return(
        <Redirect to=''/>
      )
    }



    console.log(this.props)
    const { isNotLogged } = this.props;
    return (
      <div>

        <Navbar />



        {isNotLogged === true ?


          <Route path='/'  component={SignInComponent} />
          :

          <Switch>

            <Route path='/home' exact component={HomeComponent} />
            <Route path='/add' component={CreateComponent} />
            <Route path='/leaderboard' component={LeaderboardComponent} />
            <Route exact path='/questions/:id' component={QuestionDetailsComponent} />
            <Route path='/logout' component={SignInComponent} />
          </Switch>
        }






      </div>


    );
  }
}



function mapStateToProps({ authedUser }) {
  return {
    isNotLogged: authedUser === null, authedUser
  }
}





export default connect(mapStateToProps)(App);
