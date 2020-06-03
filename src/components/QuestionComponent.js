import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter,useLocation } from 'react-router-dom';
import { Card, CardTitle, CardBody, CardText, CardSubtitle } from 'reactstrap'
import PropTypes from 'prop-types';

class Question extends Component {
    constructor(props) {
        super(props);

        this.loadQuestionDetails = this.loadQuestionDetails.bind(this);

    }

    loadQuestionDetails(e,questionId) {
     //  console.log(this.props.history)
      
       
        let path = `/questions/` + questionId;
        this.props.history.push(path);
    }


    render() {
      


        // console.log(this.props);
        const { question } = this.props


        return (
            <div>
                <div className='signIn'>
                <Card onClick={(e) => this.loadQuestionDetails(e, question.id)}>
                        <CardBody>
                            <CardTitle>Would you rather</CardTitle>

                            <ul>

                                <li>
                                    {question.optionOne.text}
                                </li>


                                <li>
                                    {question.optionTwo.text}
                                </li>


                            </ul>
                            <button> View poll</button>

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

Question.propTypes = {
    question: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
export default withRouter(connect(mapStateToProps)(Question));