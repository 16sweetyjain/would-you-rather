import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuestionComponent from './QuestionComponent';
import Navbar from './Navbar';

class HomeForHome extends Component {
    constructor(props) {
        super(props)
    }

    render() {
       // console.log(this.props);
        const { answered, unanswered } = this.props;

        const ans = answered.map(qid =>{
           // console.log(qid)
        return (
            <QuestionComponent  key={qid} id={qid} />
        )
        })

        const unans = unanswered.map(qid =>
            <QuestionComponent key={qid} id={qid} />)


        return (
            <div >
                <div>
                    <Navbar/>
                </div>
                <div>
               unanswered:->
                    {unans}
                </div>
                <div>
                    answered:->
               
                    {ans}
                </div>

            </div>
        );
    }
}

function mapStateToProps({ users, questions, authedUser }) {
    const user = users[authedUser];
    const uid = user.id
    // console.log(uid)

    const answered = Object.keys(user.answers)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    const unanswered = Object.keys(questions).filter(qid =>
        !answered.includes(qid))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    return {

        answered, unanswered
    }
}




export default connect(mapStateToProps)(HomeForHome)