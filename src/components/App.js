import React, { useState } from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
const App = () => {
  const [imageResult, setImageResult] = useState([]);
  const onSearchSubmit = (term) => {
    unsplash
      .get("/search/photos", {
        params: { query: term },
      })
      .then((response) => {
        setImageResult(response.data.results);
      });
  };
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
      Found: {imageResult.length}
      <ImageList images={imageResult}/>
    </div>
  );
};

export default App;
