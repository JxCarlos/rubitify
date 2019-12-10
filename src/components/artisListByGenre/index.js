import React, { useEffect } from "react";
import { bindArtist } from "../../redux/artist/connect";
import { Container, Row, Col } from "react-bootstrap";

import "./styles/index.css";

const ArtisListByGenre = ({ fechtArtistList, history, artisList, match }) => {
  useEffect(() => {
    fechtArtistList();
  }, []);

  const { genreSelect } = match.params;
  const filteredArtisList = artisList.filter(elem =>
    elem.genres.find(element => element === genreSelect)
	);
	
  return (
    <Container>
      <Row>
        {filteredArtisList.map(({ name, image }) => (
          <Col sm={3}>
            <div className="circle">
              <div className="text-circle">{name}</div>
              <img src={image} className="image"></img>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default bindArtist(ArtisListByGenre);
