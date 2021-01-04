import axios from 'axios';
import { artistData, popularSongData } from '../api';

//ACTION CREATOR

export const loadSongs = (artistQuery = 'coldplay') => async (dispatch) => {
	//FETCH AXIOS

	const artistId = await axios.get(`${artistData}${artistQuery}`);
	const artist = artistId.data.artists.items[0];
	const popularSongs = await axios.get(`${popularSongData}${artist.id}/top-tracks`);
	dispatch({
		type: 'FETCH_SONGS',
		payload: {
			popularSongs: popularSongs.data.tracks
		}
	});
};

export const fetchSearch = (name) => async (dispatch) => {
	const artistId = await axios.get(`${artistData}${name}`);
	const artist = artistId.data.artists.items[0];
	const popularSongs = await axios.get(`${popularSongData}${artist.id}/top-tracks`);

	dispatch({
		type: 'FETCH_SEARCHED',
		payload: {
			searched: popularSongs.data.tracks
		}
	});
};
