import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import Create from './CreateQuestion';
import Leaderboard from './Leaderboard';
import QuestionDetails from './QuestionDetails';
import SignIn from './SignInComponent';
import { connect } from 'react-redux';


const SignInComponent = () => {
    return (
        <SignIn />
    )

}
const PrivateRoute = ({ component: Component, authedUser, ...rest }) => (
    <Route {...rest} render={(props) => (
        authedUser === null
            ? <Redirect component={SignInComponent} />
            : <Component {...props} />
    )} />
);

class RoutesComponent extends Component {

    render() {
        console.log(this.props)

        const HomeComponent = () => {
            return (
                <Home />
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




        const isNotLogged = this.props.isNotLogged

        return (
            <div>
                <Switch>
                    <Route path='/' exact component={SignInComponent} />


                    <Route path='/home' render={() => isNotLogged === true ? (<Redirect to='/' />) : (<Home />)} />
                    <Route path='/add' render={() => isNotLogged === true ? <Redirect to='/' /> : { CreateComponent }} />

                    <Route path='/leaderboard' render={() => isNotLogged === true ? <Redirect to='/' /> : { LeaderboardComponent }} />
                    <Route path='/questions/:id' render={props => isNotLogged ? <Redirect to='/' /> : { QuestionDetailsComponent }} />

                    <Route path='/logout' render={props => isNotLogged ? <Redirect to='/' /> : { SignInComponent }} />




                </Switch>
            </div>
        );
    }


}





export default RoutesComponent
