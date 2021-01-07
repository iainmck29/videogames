import React from 'react'
import User from './User'

class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showGamesPlayed: true,
        }
    }

    toggleDisplay = () => {
        this.setState(currState => ({
            showGamesPlayed: !currState.showGamesPlayed
        }))
    }
    render() {
        const users = this.props.users
        const { showGamesPlayed } = this.state
        const gamesPlayedButton = (
            <div>
                <button className="small-button" onClick={this.toggleDisplay}>{showGamesPlayed ? 'Hide' : 'Show'}</button>
            </div>
        )
        return (
            <div>
                <h1>Users</h1>
                {users && users.length ? gamesPlayedButton : ''}
                {
                    users.map(user => (
                        <User key={user.username} showGamesPlayed={showGamesPlayed} user={user} />
                    ))
                }

            </div>
        )

    }
}

export default UserList