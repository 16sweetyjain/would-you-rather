import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
class Leaderboard extends Component {
    render() {

        console.log(this.props)

        const ans = this.props.users.map((user) => {
            const score = Object.keys(user.answers).length + user.questions.length;

            return (
                <div key={user.id}>

                    <div className='signIn'>{user.name}</div>

                    <div className='home'>
                        <h6>Answered: {Object.keys(user.answers).length}</h6>
                    </div >

                    <div className='home'>
                        <h6>Questions:{user.questions.length}</h6>
                    </div>

                    <div className='home'>
                        Score:{score}
                    </div>

                </div>



            );

        })
        return (
            <div >
                <div>
                    <Navbar />
                </div>

                {ans}
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    const Score = user =>
        Object.keys(user.answers).length + user.questions.length;
    return {
        users: Object.values(users).sort((a, b) => Score(b) - Score(a))
    }
}



export default connect(mapStateToProps)(Leaderboard);