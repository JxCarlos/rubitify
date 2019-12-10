import React, { useEffect } from "react";
import { bindArtist } from '../../redux/artist/connect';
import ItemList from "../../components/itemList";

export const GenreList = ({fechtGenreList, genreList, history}) => {

	useEffect(() => {
		fechtGenreList();
	}, []);
	
	return (
		<ItemList data={genreList} history={history} type={"genres"}/>
	); 

}

export default bindArtist(GenreList);