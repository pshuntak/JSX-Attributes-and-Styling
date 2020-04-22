import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>

    <img alt="random" src={img + "?grayscale"} />
    <img alt="random" src={img} />
  </div>,
  document.getElementById("root")
);
