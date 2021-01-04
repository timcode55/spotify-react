import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { loadSongs } from '../actions/albumsAction';
import Album from '../components/Album';
import Search from '../components/Search';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
	const dispatch = useDispatch();
	useEffect(
		() => {
			dispatch(loadSongs());
		},
		[ dispatch ]
	);
	//GET ALBUMS FROM API
	const { popularSongs, searched } = useSelector((state) => state.artist);

	return (
		<div>
			<AlbumList>
				<Search loadSongs={loadSongs} />
				<h1>Artist: </h1>
				<h1>Popular Songs - </h1>
				{searched.length ? (
					<div className="searched">
						<h2>Searched Games</h2>
						<Albums>
							{searched.map((album) => (
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
					</div>
				) : (
					''
				)}
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
			{/* popularSongs() */}
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
