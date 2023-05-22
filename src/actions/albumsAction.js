import axios from "axios";
// import { artistData, popularSongData } from "../api";
import { useSelector } from "react-redux";

// var SpotifyWebApi = require("../../src/spotify-web-api");
// var spotifyApi = new SpotifyWebApi();
// spotifyApi.setAccessToken(
//   "BQAdU9Va5KqUfByQ8vu6qCcqojiNAZopq8Zj6EDUntADtDynZCJpWBtmMDIFqIQy-LK_4RprVJPJ_Vzkg3ieGQyh5oN8CQbOjZrr2CE70f87uIBmcall_Bk5NiSgfrnwXF_fb268QXgvLnP38AqbzunpOcgwdBO5KkkEDlrpbExRu_QUKN0ZQBGO"
// );

// export const getAlbums = () => {
//   spotifyApi.getArtist("1vCWHaC5f2uS3yhpwWbIA6", function (err, data) {
//     if (err) console.error(err);
//     else console.log("Artist albums", data);
//   });
// };

//ACTION CREATOR

export const loadSongs =
  (artistQuery = "coldplay", artist = "4gzpq5DPGxSnKTe4SA8HAU") =>
  async (dispatch) => {
    const topSongs = await axios.get(
      `https://spotify-api-wrapper.appspot.com/artist/${artist}/top-tracks`
    );
    const artistInfo = await axios.get(
      `https://spotify-api-wrapper.appspot.com/artist/${artistQuery}/`
    );
    dispatch({
      type: "FETCH_SONGS",
      payload: {
        popularSongs: topSongs.data.tracks,
      },
    });
    dispatch({
      type: "FETCH_ARTIST",
      payload: {
        artistData: artistInfo,
      },
    });
  };

export const fetchSearch = (artistName) => async (dispatch) => {
  const artistId = await axios.get(
    `https://spotify-api-wrapper.appspot.com/artist/${artistName}/`
  );
  let idArtist = await artistId.data.artists.items[0].id;
  dispatch(loadSongs(artistName, idArtist));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: artistId,
    },
  });
};
