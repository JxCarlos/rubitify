import React from "react";
import { bindArtist } from "../../redux/artist/connect";
import "./styles/index.css";

export class itemList extends React.Component{

	constructor(props) {
		super(props);
		this.randomSong = this.randomSong.bind(this);
	}
	
	randomSong = (element) => {
    if (element.id) {
      return;
		}
    this.props.history.push(`/genres/${element}/random_song`);
  }


render() {
	const { data, history } = this.props;
	return (
    <div className="container">
      {data &&
        data.map(element => (
          <div
            key={element.id || element}
            onClick={() => this.randomSong(element)}
            className={`color-line test-${element}`}
          >
            {element.name || element.replace("_", " ")}
          </div>
        ))}
    </div>
  );
}
  
};

export default bindArtist(itemList);
