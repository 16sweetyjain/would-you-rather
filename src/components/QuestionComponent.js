import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, useLocation } from 'react-router-dom';
import { Card, CardTitle, CardBody, CardText, CardSubtitle } from 'reactstrap'
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Avatar from './Avatar'
class Question extends Component {
    constructor(props) {
        super(props);

        this.loadQuestionDetails = this.loadQuestionDetails.bind(this);

    }

    loadQuestionDetails(e, questionId) {

        let path = `/questions/` + questionId;
        this.props.history.push(path);
    }


    render() {

        const { question, avatarId,avatarUrl } = this.props
        const id = this.props.id
        //console.log(avatar)

        return (
            <div>

                <div >
                    <Card >
                        <CardBody>
                            <div >
                                <Avatar id={avatarId} avatarUrl={avatarUrl} />
                            </div>
                            <div>
                                {question.author} asks
                            </div>
                            <div className="signIn">

                                <CardTitle>Would you rather</CardTitle>

                                <ul>

                                    <li>
                                        {question.optionOne.text}
                                    </li>


                                    <li>
                                        {question.optionTwo.text}
                                    </li>


                                </ul>
                                <Link to={`/questions/${id}`}>
                                    <button onClick={(e) => this.loadQuestionDetails(e, question.id)}> View poll</button>
                                </Link>

                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div >

        );
    }
}

function mapStateToProps(state, { id }) {
    const user = state.users;

    const question = state.questions[id]
    const queAuthor = user[question.author]

    const avatarId = queAuthor.id;
    const avatarUrl = queAuthor.avatarURL


    return {
        question,
        avatarId
        , avatarUrl
    }
}


export default withRouter(connect(mapStateToProps)(Question));