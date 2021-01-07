import './App.css';
import React from 'react'
import Add from './Add'
import UserList from './UserList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],

    }
  }

  handleAddUser = user => {
    user.numGamesPlayed = 0;
    this.setState(currState => ({ users: [...currState.users, user] }))
    console.log(this.state.users)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Video Game Store
        </header>
        <h1>Add User</h1>
        <Add users={this.state.users} onAddUser={this.handleAddUser} />
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;
