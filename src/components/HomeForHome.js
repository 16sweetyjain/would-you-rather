import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveAnswer } from '../actions/shared'

class HomeForHome extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { answered, unanswered } = this.props;

        const ans = answered.map(qid =>
            <QuestionComponent id={qid} />)

        const unans = unanswered.map(qid =>
            <QuestionComponent id={qid} />)

            
        return (
            <div>
                Hi
            </div>
        );
    }
}

function mapStateToProps({ users, questions, authedUser }) {
    const user = users[authedUser];

    const answered = Object.keys(user.answers)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    const unanswered = Object.keys(questions).filter(qid =>
        !answered.includes(qid))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    return {
        answered, unanswered
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