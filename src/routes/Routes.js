import React, { Component } from "react";
import { Switch, Route, Router } from "react-router-dom";

import ArtisList from "../containers/artistList";
import AlbumsByArtist from "../containers/albumsByArtist";
import GenreList from "../containers/genreList";
import ListSongsByAlbum from "../containers/songsByAlbumList";
import RandomSong from "../components/randomSong";
import Home from "../containers/home";
import HomeRandomSong from "../containers/homeRandomSong"

import { history } from "../helpers";

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
					<Route path="/" exact component={Home} />	
					<Route path="/random_song" exact component={HomeRandomSong} />	
					<Route path="/genres/:genre_name/random_song" exact component={RandomSong} />
          <Route path="/genres" exact component={GenreList} />
					<Route path = "/artists/:id/albums" exact component={AlbumsByArtist} />
					<Route path = "/artists" exact component={ArtisList} />
					<Route path = "/albums/:id/songs" exact component={ListSongsByAlbum} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
