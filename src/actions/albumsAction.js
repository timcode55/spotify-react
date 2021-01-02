import axios from 'axios';

//ACTION CREATOR

export const loadAlbums = () => async (dispatch) => {
	const albumData = await axios.get('https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/albums?limit=50', {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization:
				'Bearer BQAahFpatI1nhsPMK7lEnhicXeFxvSdw5zE3aWQXF9OzYooeFW0xoqH056SaMLtUED67sqrY8T2MVxUAnn-tsl4CWMTXm1mCSG7geQYO2Y1xNQXdcaAZJqZlMXEzrLhTqMoeIfrfJ6MOY_hcYGPhLNVp-8CkD7FhvIhAPeLi0E2GnqVL3atuRl6kUoF8bsjcl3n0U0VQKPh9f2aHZ45rIw'
		}
	});
	const popularSongData = await axios.get(
		'https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/top-tracks?market=US',
		{
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization:
					'Bearer BQAahFpatI1nhsPMK7lEnhicXeFxvSdw5zE3aWQXF9OzYooeFW0xoqH056SaMLtUED67sqrY8T2MVxUAnn-tsl4CWMTXm1mCSG7geQYO2Y1xNQXdcaAZJqZlMXEzrLhTqMoeIfrfJ6MOY_hcYGPhLNVp-8CkD7FhvIhAPeLi0E2GnqVL3atuRl6kUoF8bsjcl3n0U0VQKPh9f2aHZ45rIw'
			}
		}
	);

	// .then((res) => {
	// 	console.log(res.data);
	// });
	dispatch({
		type: 'FETCH_ALBUMS',
		payload: {
			albums: albumData.data.items,
			popularSongs: popularSongData.data.tracks
		}
	});
};
