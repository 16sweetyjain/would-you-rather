import React, { Component } from 'react';

class Avatar extends Component {
    
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