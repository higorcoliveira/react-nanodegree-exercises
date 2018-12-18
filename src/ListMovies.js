import React, { Component } from 'react'

class ListMovies extends Component {
	render() {
      	const users = this.props.users;
        const movies = this.props.movies;
          
        function getUser(userId) {
        	return users[userId].name;
        }
      
      	function getFavoriteMovie(movieId) {
        	return movies[movieId].name;
        }
      
    	return (
          <ol className='movie-list'>
          	{this.props.profiles.map((profile) => (
          		<li key={profile.id}>
					<div>
          				<p>{getUser(profile.userID)} favorite movie is {getFavoriteMovie(profile.favoriteMovieID)}.</p>
					</div>
				</li>
        	))}
          </ol>
        )
    }
}

export default ListMovies