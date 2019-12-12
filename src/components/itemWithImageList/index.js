import React from "react";
import { bindArtist } from "../../redux/artist/connect";
import { Container } from "react-bootstrap";

import "./styles/index.css";

const ItemList = ({ data, history, action, style }) => {

  function albumsByArtits(id) {
    history.push(`/artists/${id}/albums`);
  }

  function searchSongs(id) {
    history.push(`/albums/${id}/songs`);
  }

  const _class = `description-text ${style}`;

  return (
    <Container>
      <div className={_class}>
        {data.map(({ name, image, id }) => (
          <div
            className="item"
            key={`artist-${name}`}
            onClick={() =>
              action === "AlbumsByArtits" ? albumsByArtits(id) : searchSongs(id)
            }
          >
            <div
              className="circle"
              style={{
                backgroundImage: `url(${image})`
              }}
            ></div>
            <div className="text-circle">{name}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default bindArtist(ItemList);
