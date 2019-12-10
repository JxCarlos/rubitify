import React, { Component } from "react";
import { Switch, Route, Router } from "react-router-dom";

import { history } from "../helpers";

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
					<Route path="/genres/:genre_name/random_song" exact component={RandomSong} />
          <Route path="/genres" exact component={GenreList} />
					<Route path="/artists/:genreSelect" exact component={ArtisListByGenre} />
					<Route path = "/artists/:id/albums" exact component={AlbumsByArtist} />
					<Route path = "/artists" exact component={ArtisList} />
					<Route path = "/albums/:id/songs" exact component={ListSongsByAlbum} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
