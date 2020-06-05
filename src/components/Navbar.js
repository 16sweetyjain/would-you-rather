import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';
class Navbar extends Component {
  render() {

    
    

    


    return (


      <div className="box">
        <div className="box-row">

          <div className='box-cell box1'>
            <Link to='/home'>Home</Link>
          </div>

          <div className='box-cell box2'>
            <Link to='/add'>Create Question</Link>
          </div>
          <div className='box-cell box1'>
            <Link to='/leaderboard'>Leaderboard</Link>
          </div>
          <div className='box-cell box2'>
            <Link to='/logout'>Logout</Link>
          </div>

        </div>


      </div>



    );
  }
}

export default connect()(Navbar)
