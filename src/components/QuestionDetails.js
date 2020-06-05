import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
        //e.preventDefault()
        this.props.handleSave(qid.qid, this.state.selected)
      
       



    }

    onValueChange(e) {
        e.preventDefault()
        this.setState({ selected: e.target.value })
    }
    render() {
     

        const { question, votesForTwo, votesForOne, percentOne, percentTwo, avatarId, avatarUrl,answer } = this.props;
     
        let qid, author, optionOne, optionTwo, total_votes;
        if (question !== undefined) {
            qid = question.id
            author = question.author
            optionOne = question.optionOne.text
            optionTwo = question.optionTwo.text
            total_votes = votesForOne + votesForTwo
           
        }

        if (!answer) {
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


                        <form >
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

                                <button  disabled={this.state.selected===null}  className="btn btn-default" type="button"
                                onClick={()=>this.handleClick({qid})}>
                                    Submit
                                 </button>
                                
                            


                        </form>
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
                            {optionOne}

                        </div>

                        <div>
                            {votesForOne} out of {total_votes}
                        </div>
                        <div>
                            {percentOne} %
                       </div>


                    </div>


                    <div>
                        <div>
                            {optionTwo}
                        </div>
                        <div>
                            {votesForTwo} out of {total_votes}
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

    let total, votesForTwo, votesForOne, percentOne, queAuthor, percentTwo, avatarId, avatarUrl,answer;

    const id = ownProps.match.params.id;
    const answers = users[authedUser].answers;

    if (questions[id] !== undefined) {
        question = questions[id]
        queAuthor = users[question.author]
        avatarId = queAuthor.id;
        avatarUrl = queAuthor.avatarURL

        votesForOne = question.optionOne.votes.length;
        votesForTwo = question.optionTwo.votes.length;
        total = question.optionOne.votes.length + question.optionTwo.votes.length;
        percentOne = financial((question.optionOne.votes.length / total) * 100);
        percentTwo = financial((question.optionTwo.votes.length / total) * 100);

        if (answers.hasOwnProperty(question.id)) {
            answer = answers[question.id]
          }
        return {
            question, total, votesForTwo, votesForOne, percentOne, percentTwo, avatarId, avatarUrl, authedUser,answer
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