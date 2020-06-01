import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardBody, CardText, CardSubtitle } from 'reactstrap'

class Question extends Component {
    constructor(props) {
        super(props);


        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(){

    }

    render() {
        console.log(this.props);
        const { question } = this.props
       

        return (
            <div>
                <div className='signIn'>
                    <Card>
                        <CardTitle>Would you rather</CardTitle>
                        <CardBody>

                            <ul>

                                <li>
                                    {question.optionOne.text}
                                </li>


                                <li>
                                    {question.optionTwo.text}
                                </li>


                            </ul>
                            <button onClick={this.handleClick}> View Poll</button>




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
export default connect(mapStateToProps)(Question);