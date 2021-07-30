import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import Home from './pages/Home'

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    return <Home/>;
};

ReactDOM.render(<App />, document.getElementById("root"));