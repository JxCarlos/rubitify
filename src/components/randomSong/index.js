import React, { useEffect } from "react";
import { bindArtist } from "../../redux/artist/connect";
import { Container, Row } from "react-bootstrap";

import "./styles/index.css"

const RandomSong = ({ fechtRadomSong, onResetSongRandom,  fechtSongsByAlbum,randomSong, match, songsByAlbum }) => {
  useEffect(() => {
		const { genre_name } = match.params;
		onResetSongRandom();
		fechtRadomSong(genre_name);
	}, []);
	
	function searchOtherSongs (randomSong) {
		if (songsByAlbum.length === 0) {
			fechtSongsByAlbum(randomSong.album_id);
		}else{

		const songOne = Math.floor(Math.random() * songsByAlbum.length);
		const songTwo = Math.floor(Math.random() * songsByAlbum.length);
		const songThree = Math.floor(Math.random() * songsByAlbum.length);

    return (
      <div>
        <audio src={randomSong.preview_url} controls loop></audio>
        <div>
          <h1>Other recommended songs</h1>
					<audio id={songsByAlbum[songOne].id} src={songsByAlbum[songOne].preview_url} controls loop></audio>
					<audio id={songsByAlbum[songTwo].id} src={songsByAlbum[songTwo].preview_url} controls loop></audio>
					<audio id={songsByAlbum[songThree].id} src={songsByAlbum[songThree].preview_url} controls loop></audio>
        </div>
      </div>
    );
		}

		
	}

  return (
    <Container>
      <Row>
        {randomSong && randomSong.preview_url ? (

					<div className="center-media">
						{searchOtherSongs(randomSong)}
					</div>
          
        ) : (
					<div className="color-line">
						<h3>no preview</h3>
					</div>
          
        )}
      </Row>
    </Container>
  );
};

export default bindArtist(RandomSong);
