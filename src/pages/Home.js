import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { loadAlbums } from '../actions/albumsAction';
import Album from '../components/Album';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
	const dispatch = useDispatch();
	useEffect(
		() => {
			dispatch(loadAlbums());
		},
		[ dispatch ]
	);
	//GET ALBUMS FROM API
	const { popularSongs } = useSelector((state) => state.artist);
	console.log('popularsongs', popularSongs);
	// console.log('albums', albums);

	// let noDupList = [ ...new Map(albums.map((item) => [ item['name'], item ])).values() ];
	// let noDupPopularSongs = [ ...new Map(popularSongs.map((item) => [ item['name'], item ])).values() ];

	return (
		<div>
			<AlbumList>
				<h1>Popular Songs </h1>
				<Albums>
					{popularSongs.map((album) => (
						<Album
							name={album.album.name}
							released={album.release_date}
							image={album.album.images[0].url}
							href={album.preview_url}
							key={album.id}
							songName={album.name}
						/>
					))}
				</Albums>
			</AlbumList>
			popularSongs()
		</div>
	);
};

const AlbumList = styled(motion.div)`
  padding: 0rem 5rem;
`;

const Albums = styled(motion.div)`
min-height: 80vh;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
grid-column-gap: 3rem;
grid-row-gap: 5rem;
`;

export default Home;
