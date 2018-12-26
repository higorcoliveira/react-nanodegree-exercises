import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';

class UserList extends Component {
    // como esse componente renderiza o componente User, ele deve armazenar o 
    // estado que diz se deve mostrar ou não os jogos de cada usuário
    state = {
        showGamesPlayed: true
    }

    toggleGamesPlayedPanel = () => {
        this.setState(oldState => ({
            showGamesPlayed: !oldState.showGamesPlayed
        }))
    }

    render() {
        const { showGamesPlayed } = this.state;
        const { users } = this.props;
        
        // clicando mostra ou esconde os jogos do usuário
        const gamesPlayedButton = (
            <div className="smallButton" onClick={this.toggleGamesPlayedPanel}>
                <button>
                    {showGamesPlayed ? 'Hide ' : 'Show '}
                    the number of Games Played
                </button>
            </div>
        )

        return (
            <div>
                <h1>Users</h1>
                {users && users.length > 0 ? gamesPlayedButton : ''}
                <ol>
                    {users.map(user => (
                        <User key={user.username} user={user} showGamesPlayed={showGamesPlayed} />
                    ))}
                </ol>
            </div>
        )
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
};

export default UserList;