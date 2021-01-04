import axios from 'axios';

//ACTION CREATOR

export const loadAlbums = (artistQuery) => async (dispatch) => {
	const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';
	console.log(artistQuery, 'artistquery');
	artistQuery = 'coldplay';
	console.log(artistQuery, 'artistquery');
	const popularArtistData = await axios.get(`${API_ADDRESS}/artist/${artistQuery}`, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});
	const artist = popularArtistData.data.artists.items[0];

	const popularSongData = await axios.get(`${API_ADDRESS}/artist/${artist.id}/top-tracks`, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});
	console.log(popularSongData, 'popularSongData');

	dispatch({
		type: 'FETCH_SONGS',
		payload: {
			popularSongs: popularSongData.data.tracks
		}
	});
};

export const fetchSearch = (artist) => async (dispatch) => {
	const searchArtist = await loadAlbums(artist);
	console.log('albumsaction 35', artist);
	console.log('searchArtist albumsaction 36', searchArtist);

	dispatch({
		type: 'FETCH_SEARCHED',
		payload: {
			searched: searchArtist.data
		}
	});
};
