import React, { useEffect } from "react";
import { bindArtist } from "../../redux/artist/connect";

const ListSongsByAlbum = ({ match, fechtSongsByAlbum, songsByAlbum, onResetSongsByAlbum }) => {

  useEffect(() => {
		const { id } = match.params;
		onResetSongsByAlbum();
		fechtSongsByAlbum(id);	
  }, []);
	

	function listSongs(songsByAlbum){
		if (songsByAlbum.length > 0){
			return (
				songsByAlbum.map(songs => (
						<div key={songs.id} className="color-line">
							{songs.name}
						</div>
					))
			);
		}else {
			return (
				<div className="container">
					{"No preview Cancion"}
				</div>
			);
		}
	}

  return (
    <div className="container">
      {songsByAlbum && listSongs(songsByAlbum)}
    </div>
  );
};

export default bindArtist(ListSongsByAlbum);
