import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Album = ({ name, released, image, href, songName }) => {
	function btnClick() {
		window.open(href);
		console.log('href', href);
	}
	return (
		<StyledAlbum>
			<h3>Album: {name}</h3>
			<p>{released}</p>
			<img src={image} alt={name} />
			<h2>Song: {songName}</h2>

			<video href={href} controls name="media">
				<source src={href} type="audio/mpeg" />
			</video>
		</StyledAlbum>
	);
};

const StyledAlbum = styled(motion.div)`
min-height: 30vh;
box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
text-align: center;
border-radius: 1rem;
  img {  
    width: 100%;
    height: 50vh;
    
  }
  video {
   
    height: 4rem;
    width: 50%;
  }
`;

export default Album;
