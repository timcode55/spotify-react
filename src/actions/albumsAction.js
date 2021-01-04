import axios from 'axios';

//ACTION CREATOR

export const loadAlbums = () => async (dispatch) => {
	const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';
	let artistQuery = 'coldplay';
	const popularArtistData = await axios.get(`${API_ADDRESS}/artist/${artistQuery}`, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});
	console.log(popularArtistData, 'populartistdata');
	const artist = popularArtistData.data.artists.items[0];
	console.log(artist, 'artistid');

	const popularSongData = await axios.get(`${API_ADDRESS}/artist/${artist.id}/top-tracks`, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});
	console.log(popularSongData, 'popularSongData');

	dispatch({
		type: 'FETCH_ALBUMS',
		payload: {
			popularSongs: popularSongData.data.tracks
		}
	});
};
