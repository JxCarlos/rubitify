import React from "react";
import { bindArtist } from "../../redux/artist/connect";
import { Button, ListGroup } from "react-bootstrap";

import "./styles/index.css";

const Home = () => {
  return (
    <div className="center">
      <Button href="/random_song">Randon Song</Button>
			<hr></hr>
      <ListGroup>
        <ListGroup.Item action href="/genres">List of Genres</ListGroup.Item>
        <ListGroup.Item action href="/artists">List of Artist</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default bindArtist(Home);
