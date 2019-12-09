import { LIST_ARTIST, LIST_GENRE, LIST_ALBUMS_BY_ARTIST, LIST_SONGS_BY_ALBUM, RANDOM_SONG } from "./constants";

export const initialState = {
  artisList: [],
  genreList: [],
  filteredListArtist: [],
	albumsByArtist: [],
	songsByAlbum: [],
	randomSong:[],
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_GENRE:
      return Object.assign({}, state, {
        genreList: action.genreList.data
      });
    case LIST_ARTIST:
      return Object.assign({}, state, {
        artisList: action.artisList.data
      });
    case LIST_ALBUMS_BY_ARTIST:
      return Object.assign({}, state, {
        albumsByArtist: action.albumsByArtist.data
			});
			case LIST_SONGS_BY_ALBUM:
      return Object.assign({}, state, {
        songsByAlbum: action.songsByAlbum.data
			});
			case RANDOM_SONG:
      return Object.assign({}, state, {
        randomSong: action.randomSong.data
      });
    default:
      return state;
  }
};

export default artistReducer;
