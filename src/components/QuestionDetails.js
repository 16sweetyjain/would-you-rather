import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardBody, CardText, CardSubtitle } from 'reactstrap';
import { handleSaveAnswer } from '../actions/shared';

class QuestionDetail extends Component {
    render() {
        const { question } = this.props;
        console.log(this.props)

        return (
            <div>
                <div className='signIn'>
                  Hi
                </div>
            </div >

        );
    }
}

function mapStateToProps({ questions, users, authedUser }, { match }) {

    const { id } = match.params;
    const question = questions[id];



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


export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);