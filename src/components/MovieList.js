import React from 'react';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container'>
					<img src={movie.Poster} alt='movie'></img>
	<div className='list'>
					{movie.Title}</div>
					<div className='list'>{movie.Year}</div>
					<div className='list'>{movie.Type}</div>
					
					</div>
				
			))}
		</>
	);
};

export default MovieList;