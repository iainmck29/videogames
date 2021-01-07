import React from 'react'


class Add extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
            },
            userExists: false
        }
    }

    contactExists = currUsername => {
        const users = this.props.users
        for (let user of users) {
            if (user.username === currUsername) {
                return true
            }
        }
        return false
    }


    handleChange = event => {
        const { name, value } = event.target

        this.setState(prevState => ({
            ...prevState,
            user: {
                ...prevState.user,
                [name]: value,
            }
        }))
    }


    addItem = event => {
        event.preventDefault()
        const userExists = this.contactExists(this.state.user.username)

        if (!userExists) {
            this.props.onAddUser(this.state.user)
        }
        this.setState(() => ({
            userExists,
        }))

    }

    isDisabled = () => {
        const { firstName, lastName, username } = this.state.user
        return firstName === '' || lastName === '' || username === ''
    }


    render() {
        const { firstName, lastName, username } = this.state.user
        return (
            <div>
                <form className="Aligner"
                    onSubmit={this.addItem}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={firstName}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={this.handleChange}
                    />

                    <button disabled={this.isDisabled()}>Add</button>

                </form>
                {
                    this.state.userExists ? (
                        <p className="error">You cannot add a user that already exists.</p>
                    ) : (
                            ""
                        )
                }
            </div>
        )
    }
}

export default Add