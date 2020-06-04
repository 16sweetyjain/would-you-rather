import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import Create from './CreateQuestion';
import Homi from './HomeForHome'
import Leaderboard from './Leaderboard';
import QuestionDetails from './QuestionDetails';
import SignIn from './SignInComponent'
import Error from './Error';

class RoutesComponent extends Component {
    constructor(props) {
        super(props)
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

        const HomeiComponent = () => {
            return (<Homi />
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



        const ErrorComponent = () => {
            return (
                <Error />
            )
        }
        if (!this.props.isLogged) {
            return (
                <div>
                    <Switch>


                        <React.Fragment>


                            <Route exact path='/home' component={HomeComponent} />
                            <Route exact path='/add' component={CreateComponent} />
                            <Route exact path='/home_ans' component={HomeiComponent} />
                            <Route exact path='/leaderboard' component={LeaderboardComponent} />
                            <Route path='/questions/:id' component={QuestionDetailsComponent} />
                            <Route exact path='/signIn' component={SignInComponent} />
                            <Route path='/error' component={ErrorComponent} />
                            <Redirect to='/signIn' />
                        </React.Fragment>
                    </Switch>
                </div>
            );
        }
        else {
            return (
                <div>
                    <Switch>
                        <Route exact path='/signIn' component={SignInComponent} />
                        <Redirect to='/' />

                    </Switch>
                </div>


            )
        }
    }
}

export default RoutesComponent
