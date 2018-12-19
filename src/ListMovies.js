import React, { Component } from 'react'

class ListMovies extends Component {
	render() {
      const users = this.props.users;
      const profiles = this.props.profiles;
      
      function whoLikes(movieId) {
      	let peopleWhoLikes = profiles
        	.filter((profile) => profile.favoriteMovieID === movieId.toString())
        	.map((profile) => users[profile.userID])
        //console.log(peopleWhoLikes)
        if (peopleWhoLikes.length === 0) {
        	return [{name: 'None of the current users liked this movie'}]
        }
        return peopleWhoLikes
      }
      
      
      return (        
      	<div className='movie-list'>        	
        	{Object.keys(this.props.movies).map((key) => (
              <div key={this.props.movies[key].name}>
        		<h2>{this.props.movies[key].name}</h2>
        		<p>Liked by:</p>				
                <ul>
				  {whoLikes(key).map((user) => (
                  <li key={user.id}>
                    <div>
                        {user.name}
                    </div>                    
				  </li>
				))}
				</ul>
              </div>
        	))}
        </div>
      )
    }
}

export default ListMovies