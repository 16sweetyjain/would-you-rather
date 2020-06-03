import React, { Component } from 'react';

import { Route, Switch, Redirect, Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <div>
                <div>
                    <Link to='/home_ans'>Home</Link>
                </div>

                <div>
                    <Link to='/add'>Create</Link>
                </div>
                <div>
                    <Link to='/leaderboard'>Leaderboard</Link>
                </div>

                <div>
                    <Link to='/signIn'>Logout</Link>
                </div>

            </div>
        );
    }
}

export default Navbar;