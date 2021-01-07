import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { loadSongs } from '../actions/albumsAction';
import Album from '../components/album/Album';
import Search from '../components/Search';
import Artist from '../components/artist/Artist';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import './Home.css';

const Home = () => {
	const dispatch = useDispatch();
	useEffect(
		() => {
			dispatch(loadSongs());
		},
		[ dispatch ]
	);
	//GET ALBUMS FROM API
	const { popularSongs, searched, artistData } = useSelector((state) => state.artist);

	return (
		<div className="main-container">
			<AlbumList>
				<Search loadSongs={loadSongs} />
				<Artist artistData={artistData} popularSongs={popularSongs} />
				{searched.length ? (
					<div className="searched">
						<Albums>
							{searched.map((album) => (
								<Album
									name={album.album.name}
									image={album.album.images[0].url}
									href={album.preview_url}
									key={album.id}
									songName={album.name}
								/>
							))}
						</Albums>
					</div>
				) : (
					<Albums>
						{popularSongs.map((album) => (
							<Album
								name={album.album.name}
								image={album.album.images[0].url}
								href={album.preview_url}
								key={album.id}
								songName={album.name}
							/>
						))}
					</Albums>
				)}
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
grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
grid-column-gap: 3rem;
grid-row-gap: 5rem;
align-content: center;
align-items: center;
justify-content: center;

.sc-dlfnbm {
  width: 500px;
}
`;

export default Home;
