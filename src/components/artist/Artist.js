import React from "react";
import "./Artist.css";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

const Artist = (props) => {
  const { searched } = useSelector((state) => state.artist);

  return (
    <div>
      <div className="artist-container">
        <div className="artist-info">
          {props.popularSongs.length ? (
            <div className="artist-info">
              <h1 className="band-title">
                Artist: {props?.artistData?.data?.artists?.items[0]?.name}
              </h1>
              <h3 className="h3">
                Followers:{" "}
                {props?.artistData?.data?.artists?.items[0]?.followers?.total}
              </h3>
              <h3 className="h3">
                Popularity:{" "}
                {props?.artistData?.data?.artists?.items[0]?.popularity}
              </h3>
            </div>
          ) : null}
        </div>
        <img
          className="band-image"
          src={
            props?.popularSongs?.length
              ? props?.artistData?.data?.artists.items[0].images[0] &&
                props?.artistData?.data?.artists.items[0].images[0].url
              : null
          }
          alt="Band Image"
        />
      </div>
      <h1 className="popular">Popular Songs</h1>
    </div>
  );
};

export default Artist;
