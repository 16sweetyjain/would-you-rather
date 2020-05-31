import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveAnswer } from '../actions/shared'

class HomeForHome extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        console.log(this.props)
        const {users,authedUser,questions,answers}= this.props;
       // const ans=users[authedUser]
        
     //  console.log(ans)
        return (
            <div>
                Hi
            </div>
        );
    }
}

function mapStateToProps({ users, questions, authedUser }) {
    const user=users[authedUser];
    const answers=user[answers];

    return {
        authedUser, users, questions,answers
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleSave: (qid, option) => {
            dispatch(handleSaveAnswer(qid, option))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(HomeForHome)