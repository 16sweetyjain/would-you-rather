import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, useLocation } from 'react-router-dom';

import { Card, CardTitle, CardBody, CardText, CardSubtitle } from 'reactstrap';
import { handleSaveAnswer } from '../actions/shared';

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

        console.log(this.state.selected)
        const { question } = this.props;
        const qid = question.id




        if (this.state.answer === false) {
            return (
                <div className="signIn">
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
                                    value="OptionOne"
                                    checked={this.state.selected === "OptionOne"}
                                    onChange={this.onValueChange}

                                />
                                {question.optionOne.text}
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    value="OptionTwo"
                                    checked={this.state.selected === "OptionTwo"}
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
                        <h1>
                            Would you rather
                            </h1>
                    </div>

                    <div>
                        {question.optionOne.text}

                        {question.optionOne.votes} out of 3
                    </div>


                    <div>
                        {question.optionTwo.text}
                        {question.optionTwo.votes} out of 3
                    </div>


                </div>
            );
        }

    }




}



function mapStateToProps({ questions, users, authedUser }, { ...ownProps }) {

    const id = ownProps.match.params.id;



    const question = questions[id]


    return {
        question
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