import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList} from 'react-tabs';

import QuestionComponent from './QuestionComponent';
class Home extends Component {
    constructor(props) {
        super(props)
        this.state={
            tabIndex:0
        }
    }
    render() {
       
        const { answered, unanswered } = this.props;

        const ans = answered.map(qid =>{
        
        return (
            <QuestionComponent  key={qid} id={qid} />
        )
        })

        const unans = unanswered.map(qid =>
            <QuestionComponent key={qid} id={qid} />)

      
        
        return (
            <div >
              
              
              <div>
                  <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex=>this.setState({tabIndex})}>
                      <TabList>
                     
                      <Tab title='unans'>
                          Unanswered
                      </Tab>
                     
                  
                      <Tab title="Home">
                          Answered
                      </Tab>
                 
                     
                     
                      </TabList>
                  </Tabs>
              </div>
              {this.state.tabIndex===0?
                <div>
               unanswered:->
                    {unans}
                </div>:
                <div>
                    answered:->
               
                    {ans}
                </div>}

            </div>
        );
    }
}

function mapStateToProps({ users, questions, authedUser }) {
    const user = users[authedUser];
   
 

    const answered = Object.keys(user.answers)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    const unanswered = Object.keys(questions).filter(qid =>
        !answered.includes(qid))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    return {

        answered, unanswered,authedUser
    }
}



export default connect(mapStateToProps)(Home);