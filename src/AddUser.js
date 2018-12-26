import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {
    state = {
        user: {
            firstName: '',
            lastName: '',
            username: ''
        },
        userExists: false
    }

    contactExists = currUsername => {
        const users = this.props.users;
        for (let user of users) {
            if (user.username === currUsername) {
                return true;
            }
        }
        return false;
    }

    // faz o tratamento se o usuário já existe
    handleSubmit = event => {
        event.preventDefault();
        const userExists = this.contactExists(this.state.user.username)

        if (!userExists) {
            this.props.onAddUser(this.state.user)
        }

        this.setState(() => ({
            userExists
        }))
    }

    // preenche o estado user com os valores passados no campo do formulário
    // usa o operador spread para preservar os usuários já inseridos e adicionar os novos
    handleInputChange = event => {
        const { name, value } = event.target

        this.setState(currState => ({
            ...currState,
            user: {
                ...currState.user,
                [name]: value
            }
        }))
    }

    // só habilita o botão se todos os campos do formulário forem preenchidos
    isDisabled = () => {
        const { firstName, lastName, username } = this.state.user;

        return firstName === '' || lastName === '' || username === '';
    }

    render() {
        const { firstName, lastName, username } = this.state.user;

        return (
            <div>
                <h1>New User</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text" name="firstName" placeholder="Enter First Name"
                            value={firstName} onChange={this.handleInputChange} 
                        />
                        <input
                            type="text" name="lastName" placeholder="Enter Last Name"
                            value={lastName} onChange={this.handleInputChange} 
                        />
                        <input
                            type="text" name="username" placeholder="Enter Username"
                            value={username} onChange={this.handleInputChange} 
                        />
                    </div>
                    <button disabled={this.isDisabled()}>Add</button>
                </form>
                {this.state.userExists ? (
                    <p className="error">User already exists.</p>
                ) : ( ''
                )}
            </div>
        )
    }
}

AddUser.propTypes = {
    onAddUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
}
  
export default AddUser