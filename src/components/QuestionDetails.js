import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, useLocation } from 'react-router-dom';

import { Card, CardTitle, CardBody, CardText, CardSubtitle } from 'reactstrap';
import { handleSaveAnswer } from '../actions/shared';
import Navbar from './Navbar';
class QuestionDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: null,
            answer: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }

    handleClick(qid) {
        this.props.handleSave(qid, this.state.selected)
        this.setState({ answer: true })
    }

    onValueChange(e) {
        this.setState({ selected: e.target.value })
    }
    render() {

        const { question, total, voteForTwo, votesForOne } = this.props;
        const qid = question.id

        console.log(question)




        if (this.state.answer === false) {
            return (
                <div className="signIn">
                    <div>
                        <Navbar />
                    </div>
                    <div>
                        {question.author} asks
                </div>
                    <div>
                        <h1> Would you rather </h1>
                    </div>
                    <form onSubmit={() => this.handleClick(qid)}>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    value="optionOne"
                                    checked={this.state.selected === "optionOne"}
                                    onChange={this.onValueChange}

                                />
                                {question.optionOne.text}
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    value="optionTwo"
                                    checked={this.state.selected === "optionTwo"}
                                    onChange={this.onValueChange}
                                />
                                {question.optionTwo.text}
                            </label>
                        </div>


                        <button className="btn btn-default" type="submit">
                            Submit
        </button>
                    </form>
                </div>
            );
        }
        else {
            return (
                <div>
                    <div>
                        <Navbar />
                    </div>
                    <div>
                        <h1>
                            Would you rather
                            </h1>
                    </div>

                    <div>
                        <div>
                            {question.optionOne.text}

                        </div>

                        <div>
                            {votesForOne} out of 3
                       </div>


                    </div>


                    <div>
                        <div>
                            {question.optionTwo.text}
                        </div>
                        <div>
                            {votesForOne} out of 3
                       </div>


                    </div>


                </div>
            );
        }

    }




}


function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}
function mapStateToProps({ questions, users, authedUser }, { ...ownProps }) {

    const id = ownProps.match.params.id;



    const question = questions[id]
    const votesForOne = question.optionOne.votes.length;
    const voteForTwo = question.optionTwo.votes.length
    let total, percOne, percTwo;
    total = question.optionOne.votes.length + question.optionTwo.votes.length;

    return {
        question, total, voteForTwo, votesForOne
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleSave: (qid, option) => {
            dispatch(handleSaveAnswer(qid, option))
        }
    }

}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionDetail));