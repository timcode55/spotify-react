import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import './Album.css';

const Album = ({ name, released, image, href, songName }) => {
	function btnClick() {
		window.open(href);
		console.log('href', href);
	}
	return (
		<StyledAlbum>
			<div className="album-container">
				<h3>Album: {name}</h3>
				<p>{released}</p>
				<img className="album-image" src={image} alt={name} />
				<div className="bottom">
					<h2>Song: {songName}</h2>

					<video className="video" href={href} controls name="media">
						<source src={href} type="audio/mpeg" />
					</video>
				</div>
			</div>
		</StyledAlbum>
	);
};

const StyledAlbum = styled(motion.div)`

`;

export default Album;
