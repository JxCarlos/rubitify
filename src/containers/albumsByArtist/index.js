import React, { useEffect } from "react";
import { bindArtist } from "../../redux/artist/connect";
import ItemWithImageList from "../../components/itemWithImageList";


const AlbumsByArtist = ({ fechtAlbumbsByArtist, match, albumsByArtist, history }) => {
 
	useEffect(() => {
		const { id } = match.params;
		fechtAlbumbsByArtist(id);
	}, []);

	return <ItemWithImageList data={albumsByArtist} history={history} action={"searchSongs"} style={"text_out_image"}/>;
};

export default bindArtist(AlbumsByArtist);
