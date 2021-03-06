import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser'



class SignIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ userName: e.target.value });
    }
    handleSubmit(e,id) {
      
        const { authenticate } = this.props;
        authenticate(this.state.userName);
    
    }

    render() {
       

        const { authedUser } = this.props
        return (
            <div>
              
                <div className='signIn'>
                    <h3> WELCOME TO THE GAME </h3>
                </div>
                <div className='signIn'>
                    <h5> Please Sign In to continue </h5>
                </div>
                <div className='signIn'>




                    <select   value={this.state.userName} onChange={this.handleChange} >
                        <option  value=" choose" >Choose one user..</option>
                        {this.props.userId.map((user) => {
                            return (
                                <option  key={user} value={user}>{user}</option>
                            )
                        })}

                    </select>
                    <div className='signIn'>
                        <Link to='/home'>
                            <button onClick={(e)=>this.handleSubmit(e,authedUser)}>SignIn</button>
                        </Link>


                    </div>


                </div>

            </div>
        );
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        userId: Object.keys(users), authedUser
    }
}


function mapDispatchToProps(dispatch) {
    return {
        authenticate: (id) => {
            dispatch(setAuthedUser(id))
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(SignIn);