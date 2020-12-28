import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import logo from "../Unsplash.png"
class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos?per_page=30", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  componentDidMount() {
    this.onSearchSubmit("green");
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <img alt="logo" src={logo} style={{marginLeft: "4px", width: "300px"}}></img>
        <SearchBar parentProp={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
