import React from "react";
import { render } from "react-dom";
// import { render } from "sass";
import App from "./src/App"
import List from "./src/ListDisplay"


render(<App />, document.getElementById('root'));
render(<List />, document.getElementById('ingredientList'))
// reactDom.render(<App />, document.getElementById("root"));

