import React, { Component } from 'react';
import axios from 'axios';

class Badges extends Component {
    state = {
        badges: 0,
    }

    render() {
        const badgeCount = this.state.badges;
        
        return(
            <div>
                <h2>Gym Badges: {badgeCount}</h2>
                <button
                    type="button"
                    onClick={() => this.challengeLeader(badgeCount)}
                >
                    Challenge Leader
                </button>
            </div>
        );
    }

    challengeLeader(badgeCount) {
        axios.patch('http://localhost:3002/api/badges/' + badgeCount)
            .then(response => {
                this.setState({
                    badges: response.data,
                });
            });
    }


}

export default Badges;