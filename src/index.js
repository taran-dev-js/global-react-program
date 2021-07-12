import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import logo from "./assests/images/img.png";

const App = () => {

    console.log('test')
    return <div><img src={logo} />Hello React!</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));