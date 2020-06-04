import React, { Component } from 'react';

class Avatar extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const avatarUrl=this.props.avatarUrl;
        return (

            <div >
                <img className="avatar" src={avatarUrl} alt='john doe' />
            </div>
        );
    }
}

export default Avatar