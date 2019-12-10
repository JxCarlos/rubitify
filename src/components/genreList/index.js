import React, { useEffect } from "react";
import { bindArtist } from '../../redux/artist/connect';

import './styles/index.css';

const GenreList = ({history, fechtGenreList, genreList}) => {


	useEffect(() => {
		fechtGenreList();
	}, []);

	function searchArtist(genre){
		history.push(`/artists/${genre}`);
	}
	
	return (
		<div className="container">
			{genreList && genreList.map(genre => 
				<div key={genre} onClick={() => searchArtist(genre)} className="color-line">
					{genre.split("_").join(" ")}
				</div>)}
		</div>
	
	); 

}

export default bindArtist(GenreList);