import React, { useEffect } from "react";
import { bindArtist } from '../../redux/artist/connect';
import ItemList from "../../components/itemList";

export const HomeRandomSong = ({fechtGenreList, genreList, fechtRadomSong, onResetSongRandom, randomSong}) => {

	useEffect(() => {
		onResetSongRandom();
		fechtGenreList();
	}, []);
	
	function randomGenre(){
		if(genreList != "") {
			const randomGenre = Math.floor(Math.random() * genreList.length);
			return randomGenre;
		}
	}

	function renderSong(){
		if(randomGenre() !== undefined && randomSong.length === 0){
			const position = randomGenre();
			fechtRadomSong(genreList[position])
			
		}
		return (
			<div>
					{randomSong && randomSong.preview_url ? (
	
						<div className="center-media">
							 <audio src={randomSong.preview_url} controls loop></audio>
						</div>
						
					) : (
						<div className="color-line">
							<h3>no preview</h3>
						</div>
						
					)}
				</div>
		);
	}

	return (
    <div className="container">
      {genreList && renderSong()}
    </div>
  );

}

export default bindArtist(HomeRandomSong);