import React, { useEffect } from "react";
import { bindArtist } from "../../redux/artist/connect";
import { Container, Row } from "react-bootstrap";

const ArtisList = ({ fechtRadomSong, randomSong, match }) => {
  useEffect(() => {
    const { genre_name } = match.params;
    fechtRadomSong(genre_name);
  }, []);

  return (
    <Container>
      <Row>
        {randomSong && randomSong.preview_url ? (
          <audio src={randomSong.preview_url} controls loop></audio>
        ) : (
					<div className="text-white">
						<h3>no preview</h3>
					</div>
          
        )}
      </Row>
    </Container>
  );
};

export default bindArtist(ArtisList);
