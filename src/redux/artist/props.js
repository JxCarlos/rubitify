import { genreListAction, artistListAction, albumsByArtistAction, songsByAlbumAction, ramdonSongAction } from "./actions";
import { BASE_URL } from "../../config";

export const mapStateToProps = ({ artistReducer }) => {
  return { ...artistReducer };
};

export const mapDispatchToProps = dispatch => ({
	dispatch,
	
	fechtGenreList: () => {
		fetch(`${BASE_URL}/genres`)
				.then(response => response.json())
				.then(data => dispatch(genreListAction(data)))
				.catch(err => console.log(err.message));
	},

	fechtArtistList: () => {
		fetch(`${BASE_URL}/artists`)
				.then(response => response.json())
				.then(data => dispatch(artistListAction(data)))
				.catch(err => console.log(err.message));
	},

	fechtAlbumbsByArtist: (id) => {
		fetch(`${BASE_URL}/artists/${id}/albums`)
				.then(response => response.json())
				.then(data => dispatch(albumsByArtistAction(data)))
				.catch(err => console.log(err.message));
	},
	fechtSongsByAlbum:  (id) => {
		fetch(`${BASE_URL}/albums/${id}/songs`)
				.then(response => response.json())
				.then(data => dispatch(songsByAlbumAction(data)))
				.catch(err => console.log(err.message));
	},
	fechtRadomSong:  (genre_name) => {
		fetch(`${BASE_URL}/genres/${genre_name}/random_song`)
				.then(response => response.json())
				.then(data => dispatch(ramdonSongAction(data)))
				.catch(err => console.log(err.message));
	}
});
