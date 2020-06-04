import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, useLocation, Redirect } from 'react-router-dom';

import { Card, CardTitle, CardBody, CardText, CardSubtitle } from 'reactstrap';
import { handleSaveAnswer } from '../actions/shared';
import Navbar from './Navbar';
import Avatar from './Avatar'


import ErrorComponent from './Error';
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
        console.log(this.props)
        if (this.props === null) {
            return (
                <Redirect to='/error' />
            )
        }






        else {
            const { question, total, voteForTwo, votesForOne, percentOne, percentTwo, avatarId, avatarUrl } = this.props;
            let qid, author, optionOne, optionTwo, total_votes;
            if (question != undefined) {
                qid = question.id
                author = question.author
                optionOne = question.optionOne.text
                optionTwo = question.optionTwo.text
                total_votes = votesForOne + voteForTwo


            }


            if (this.state.answer === false) {
                return (
                    <div className="signIn">
                        <div>

                            <Navbar />
                        </div>
                        <div >
                            <Avatar id={avatarId} avatarUrl={avatarUrl} />
                        </div>

                        <div>
                            {author} asks
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
                                    {optionOne}
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
                                    {optionTwo}
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
                        <div >
                            <Avatar id={avatarId} avatarUrl={avatarUrl} />
                        </div>
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
                            <div>
                                {percentOne} %
                       </div>


                        </div>


                        <div>
                            <div>
                                {question.optionTwo.text}
                            </div>
                            <div>
                                {votesForOne} out of 3
                       </div>
                            <div>
                                {percentTwo} %
</div>

                        </div>


                    </div>
                );
            }
        }


    }




}


function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}
function mapStateToProps({ questions, users, authedUser }, { ...ownProps }) {

    let question;

    let total, voteForTwo, votesForOne, percentOne, queAuthor, percentTwo, avatarId, avatarUrl;

    const id = ownProps.match.params.id;

    if (questions[id] != undefined) {
        question = questions[id]
        queAuthor = users[question.author]
        avatarId = queAuthor.id;
        avatarUrl = queAuthor.avatarURL

        votesForOne = question.optionOne.votes.length;
        voteForTwo = question.optionTwo.votes.length;
        total = question.optionOne.votes.length + question.optionTwo.votes.length;
        percentOne = (question.optionOne.votes.length / total) * 100;
        percentTwo = (question.optionTwo.votes.length / total) * 100


        return {
            question, total, voteForTwo, votesForOne, percentOne, percentTwo, avatarId, avatarUrl
        }

    }

    else {
        return null
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