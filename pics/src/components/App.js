import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class componentName extends Component {
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 719f94ffaa69be7362d8c5cd6289dbd317441a8a20e95acffd1927a2bb0ee091"
      }
    });
    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default componentName;
