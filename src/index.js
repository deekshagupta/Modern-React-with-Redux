import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
      image={faker.image.avatar()}
        author={"Sam"}
        timeAlgo={"Today at 6:00PM"}
        content={"Nice work!"}
      />
      <CommentDetail
      image={faker.image.avatar()}
        author={"Sam"}
        timeAlgo={"Today at 8:00PM"}
        content={"Nice work!"}
      />
      <CommentDetail
      image={faker.image.avatar()}
        author={"Sam"}
        timeAlgo={"Today at 9:00PM"}
        content={"Nice work!"}
      />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
