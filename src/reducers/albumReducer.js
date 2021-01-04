const initState = {
	popularSongs: [],
	searched: []
};

const albumsReducer = (state = initState, action) => {
	switch (action.type) {
		case 'FETCH_SONGS':
			return { ...state, popularSongs: action.payload.popularSongs };
		case 'FETCH_SEARCHED':
			return { ...state, searched: action.payload.searched };
		default:
			return { ...state };
	}
};

export default albumsReducer;
