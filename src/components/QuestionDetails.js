import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter,useLocation } from 'react-router-dom';

import { Card, CardTitle, CardBody, CardText, CardSubtitle } from 'reactstrap';
import { handleSaveAnswer } from '../actions/shared';

class QuestionDetail extends Component {
    render() {
    const { question } = this.props;
      //console.log(question)
        const {id}=this.props
        console.log(question)
     // console.log(this.props.location.pathname);

        return (
           <div>
               Hi
            </div >

        );
    }
}

function mapStateToProps({ questions, users, authedUser }, { ...ownProps }) {
    
    const id=ownProps.match.params.id;

    

  const question=questions[id]
  



    return {
    id,
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


export default withRouter(connect(mapDispatchToProps,mapStateToProps)(QuestionDetail));