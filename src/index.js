import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import Logo from "./components/Logo";

const App = () => {

    console.log('test')
    return <div><Logo /></div>;
};

ReactDOM.render(<App />, document.getElementById("root"));