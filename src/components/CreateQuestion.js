import React, { Component } from 'react';
import { formatQuestion } from '../_DATA.js';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/shared'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Avatar from './Avatar'




class CreateQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            option1: '', option2: ''
        }
        this.handleOption1 = this.handleOption1.bind(this);
        this.handleOption2 = this.handleOption2.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
    }


    handleOption1(e) {
        this.setState({ option1: e.target.value })
    }

    handleOption2(e) {
        this.setState({ option2: e.target.value })
    }

    handleCreate() {

        this.props.addQuestion(this.state.option1, this.state.option2);

    }
    render() {



        const { authedUser, avatarId, avatarUrl } = this.props



        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div>
                    <Avatar id={avatarId} avatarUrl={avatarUrl} />
                </div>
                <div className='signIn'> asked by {authedUser} </div>
                <div className='signIn'>
                    <form >
                        <div className='signIn'>

                            <label>
                                Enter option one:
                         <input type="text" name="option1" value={this.state.option1} onChange={this.handleOption1} />
                            </label>
                        </div>

                        <div className='signIn'>
                            <label>
                                Enter option two:
                         <input type="text" name="option2" value={this.state.option2} onChange={this.handleOption2} />
                            </label>
                        </div>
                        <Link to='/home'>
                            <button className='button' onClick={this.handleCreate} > create question</button>
                        </Link>
                    </form>
                </div>

            </div>
        );
    }
}

function mapStateToProps({ users, questions, authedUser }) {

    const avatarId = authedUser;
    const avatarUrl = users[authedUser].avatarURL
    return {
        authedUser,
        avatarId, avatarUrl


    }
}

function mapDispatchToProps(dispatch) {
    return {
        addQuestion: (optionOne, optionTwo) => {
            dispatch(handleAddQuestion(optionOne, optionTwo))
        }
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion)