import React, { useEffect } from "react";
import { bindArtist } from "../../redux/artist/connect";
import ItemWithImageList from "../../components/itemWithImageList";


const ArtisList = ({ fechtArtistList, artisList, history }) => {
  useEffect(() => {
    fechtArtistList();
  }, []);

  return <ItemWithImageList data={artisList} history={history} action={"AlbumsByArtits"} style={"text_in_image"}/>;
};

export default bindArtist(ArtisList);
