import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Navbar';

class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        const {autheduser}=this.props
        return (
            <div>
                <div>
                <Navbar />
                </div>
                <div>
                    <h1>{autheduser}</h1>
                </div>
               
               

            </div>

        );
    }
}

function mapStateToProps({authedUser}){
    return {
        authedUser
    }
}


export default connect(mapStateToProps)(Home);