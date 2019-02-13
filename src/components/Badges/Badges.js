import React, { Component } from 'react';
import axios from 'axios';

class Badges extends Component {
    state = {
        badges: 0,
    }

    render() {
        const badgeCount = this.state.badges;
        
        return(
            <h2>Gym Badges: {badgeCount}</h2>
            // <button
            //     type="button"
            //     onClick={() => this.challengeLeader(badgeCount)}
            // >
            //     Challenge Leader
            // </button>
        );
    }


}

export default Badges;