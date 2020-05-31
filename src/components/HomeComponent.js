import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        const {user}=this.props
        return (
            <div>
                <div>
                    <h1>{user}</h1>
                </div>
               
                <div className='home'>
                    <div className='home'>
                        <Link to='/home_ans'>Home</Link>
                    </div>
                    <div className='home'>
                        <Link to='/create'>Create Question</Link>
                    </div>
                    <div className='home'>
                        <Link to='/leaderboard'>Leaderboard</Link>
                    </div>
                    <div className='home'>
                        <Link to='/logout'>Logout</Link>
                    </div>

                </div>

            </div>

        );
    }
}

function mapStateToProps({authedUser}){
    return {
        authedUser
    }
}


export default connect(mapStateToProps)(Home);