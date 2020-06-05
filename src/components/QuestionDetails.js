import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { handleSaveAnswer } from '../actions/shared';
import Avatar from './Avatar';
class QuestionDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: null, show: false

        }
        this.handleClick = this.handleClick.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }

    handleClick(qid) {
        this.props.handleSave(qid, this.state.selected)
        this.setState({ show: true })

    }

    onValueChange(e) {
        this.setState({ selected: e.target.value })
    }
    render() {
         console.log(this.state.show)

        const { question, votesForTwo, votesForOne, percentOne, percentTwo, avatarId, avatarUrl, authedUser } = this.props;
        console.log(question)
        let qid, author, optionOne, optionTwo, total_votes, answered;
        if (question != undefined) {
            qid = question.id
            author = question.author
            optionOne = question.optionOne.text
            optionTwo = question.optionTwo.text
            total_votes = votesForOne + votesForTwo
            answered = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)


        }
        const ans = () => {
            if (this.state.show === true) {
                return (

                    <div>

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
                                {votesForTwo} out of 3
           </div>
                            <div>
                                {percentTwo} %
</div>

                        </div>


                    </div>
                );
            }
            else {
                return null
            }
        }



        if (answered === false) {
            return (
                <div className="signIn">

                    <div >
                        <Avatar id={avatarId} avatarUrl={avatarUrl} />
                    </div>

                    <div>
                        {author} asks
                </div>
                    <div>
                        <h1> Would you rather </h1>
                    </div>
                    <div>


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
                    <div>
                        {this.ans}
                    </div>

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
                            {votesForTwo} out of 3
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







function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}
function mapStateToProps({ questions, users, authedUser }, { ...ownProps }) {

    let question;

    let total, votesForTwo, votesForOne, percentOne, queAuthor, percentTwo, avatarId, avatarUrl;

    const id = ownProps.match.params.id;

    if (questions[id] != undefined) {
        question = questions[id]
        queAuthor = users[question.author]
        avatarId = queAuthor.id;
        avatarUrl = queAuthor.avatarURL

        votesForOne = question.optionOne.votes.length;
        votesForTwo = question.optionTwo.votes.length;
        total = question.optionOne.votes.length + question.optionTwo.votes.length;
        percentOne = (question.optionOne.votes.length / total) * 100;
        percentTwo = (question.optionTwo.votes.length / total) * 100


        return {
            question, total, votesForTwo, votesForOne, percentOne, percentTwo, avatarId, avatarUrl, authedUser
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