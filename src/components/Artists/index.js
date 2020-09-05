import React from "react";

const Artists = (props) => {
  const { artists, genreTitle } = props;

  const renderCurrentState = () => (
    <>
      {artists.loading && <p> Loading artists... </p>}
      {artists.error && <p> {artists.error} </p>}
      {!artists.loading && !artists.error && artists.data.length == 0 && <p> No artists found. </p>}
      {artists.data.map((artist) => (
        <h3 key={artist.id}> {artist.name} </h3>
      ))}
    </>
  );

  return (
    <>
      {genreTitle && <h2> Artists Related to {genreTitle} </h2>}
      {renderCurrentState()}
    </>
  );
};

export default Artists;
