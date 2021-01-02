const initState = {
	albums: [],
	popularSongs: []
	// searched: []
};

const albumsReducer = (state = initState, action) => {
	switch (action.type) {
		case 'FETCH_ALBUMS':
			return { ...state, albums: action.payload.albums, popularSongs: action.payload.popularSongs };
		default:
			return { ...state };
	}
};

//ACTION
// const fetchAlbums = (data) => {
// 	return {
// 		type: 'FETCH_ALBUMS'
// 	};
// };

export default albumsReducer;
