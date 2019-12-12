import {
  LIST_ARTIST,
  LIST_GENRE,
  LIST_ALBUMS_BY_ARTIST,
  LIST_SONGS_BY_ALBUM,
  RANDOM_SONG,
  RESET_SONGS_BY_ALMBUM_LIST,
  RESET_SONG_RANDOM
} from "./constants";

export const artistListAction = artisList => ({
  type: LIST_ARTIST,
  artisList
});

export const genreListAction = genreList => ({
  type: LIST_GENRE,
  genreList
});

export const albumsByArtistAction = albumsByArtist => ({
  type: LIST_ALBUMS_BY_ARTIST,
  albumsByArtist
});

export const songsByAlbumAction = songsByAlbum => ({
  type: LIST_SONGS_BY_ALBUM,
  songsByAlbum
});

export const ramdonSongAction = randomSong => ({
  type: RANDOM_SONG,
  randomSong
});

export const resetSongsByAlbumListAction = () => ({
  type: RESET_SONGS_BY_ALMBUM_LIST
});

export const resetSongsRandomAction = () => ({
  type: RESET_SONG_RANDOM
});
