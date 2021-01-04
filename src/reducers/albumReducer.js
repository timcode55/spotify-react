const initState = {
	albums: [],
	popularSongs: []
	// searched: []
};

const albumsReducer = (state = initState, action) => {
	switch (action.type) {
		case 'FETCH_ALBUMS':
			return { ...state, popularSongs: action.payload.popularSongs };
		default:
			return { ...state };
	}
};

export default albumsReducer;
