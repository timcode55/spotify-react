const initState = {
  popularSongs: [],
  searched: [],
  artistData: [],
};

const albumsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_SONGS":
      return { ...state, popularSongs: action.payload.popularSongs };
    case "FETCH_SEARCHED":
      return { ...state, searched: action.payload.searched };
    case "FETCH_ARTIST":
      return { ...state, artistData: action.payload.artistData };
    default:
      return { ...state };
  }
};

export default albumsReducer;
