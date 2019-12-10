import React, { useEffect } from "react";
import { bindArtist } from "../../redux/artist/connect";
import ItemList from "../../components/itemList";

const ListSongsByAlbum = ({ match, fechtSongsByAlbum, songsByAlbum, onResetSongsByAlbum }) => {
	
  useEffect(() => {
		const { id } = match.params;
		onResetSongsByAlbum();
		fechtSongsByAlbum(id);	
	}, []);
	

	return (
		<ItemList data={songsByAlbum} type={"songsByAlbum"}/>
	
	); 

}
export default bindArtist(ListSongsByAlbum);