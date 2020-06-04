<<<<<<< HEAD
import React,{Component} from 'react';
import Home from '../components/HomeComponent';
import Create from '../components/CreateQuestion';
import Homi from '../components/HomeForHome'
import Leaderboard from '../components/Leaderboard';
import Logout from '../components/Logout';
import SignIn from '../components/SignInComponent'
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';

import QuestionDetails from '../components/QuestionDetails';
class Navbar extends Component{
    render(){
      
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
                  <Leaderboard  />
                );
              }
          
              const LogoutComponent = () => {
                return (
                  <Logout  />
                );
              }
          
              const QuestionDetailsComponent=()=>{
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
                    <Route path='/questions/:id'  component={QuestionDetailsComponent} />
                    exact 
              
                    <Redirect to='/' />

          
          
                  </Switch>

    <div className="box">
        <div className="box-row">
                  
                    <div className='box-cell box1'>
                        <Link to='/home'>Home</Link>
                    </div>
                   
                    <div className='box-cell box2'>
                        <Link to='/create'>Create Question</Link>
                    </div>
                    <div className='box-cell box1'>
                        <Link to='/leaderboard'>Leaderboard</Link>
                    </div>
                    <div className='box-cell box2'>
                        <Link to='/logout'>Logout</Link>
                    </div>

                </div>

            </div>
            </div>
            
        
        
              );
}
}

export default  connect()(Navbar)
=======
import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";
import { Route, Switch, Redirect, Link } from 'react-router-dom';

class NavbarComp extends Component {

    render() {
        return (
            <div>
                <React.Fragment>
                <Navbar bg="primary" variant="dark" light expand="md">
                    <NavItem>
                        <NavLink tag={Link} to='/home_ans'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/add'>Create</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/leaderboard'>Leaderboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/'>Logout</NavLink>
                    </NavItem>


                </Navbar>
                </React.Fragment>
            </div>
        );
    }
}

export default NavbarComp;
>>>>>>> aff6c718d91de55108f9a11040cffb826318f028
