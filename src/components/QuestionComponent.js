import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, useLocation } from 'react-router-dom';
import { Card, CardTitle, CardBody, CardText, CardSubtitle } from 'reactstrap'
import PropTypes from 'prop-types';
import Navbar from './Navbar';
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

        const { question } = this.props
        const id = this.props.id

        return (
            <div>
                
                <div >
                    <Card >
                        <CardBody>
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


    return {
        question: state.questions[id],

    }
}


export default withRouter(connect(mapStateToProps)(Question));