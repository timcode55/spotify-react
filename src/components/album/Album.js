import React from 'react';
import './Album.css';

const Album = ({ name, image, href, songName }) => {
	function btnClick() {
		window.open(href);
		console.log('href', href);
	}
	return (
		<div className="album-container">
			<h3 className="album-title">Album: {name}</h3>
			<img className="album-image" src={image} alt={name} />
			<div className="bottom">
				<h2 className="song-title">Song: {songName}</h2>

				<video className="video" href={href} controls name="media">
					<source src={href} type="audio/mpeg" />
				</video>
			</div>
		</div>
	);
};

export default Album;
