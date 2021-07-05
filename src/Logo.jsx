import logo from "./logo.svg";
import React from "react";

class Logo extends React.PureComponent {
    render () {
        return (
            <img src={logo} className="App-logo" alt="logo" />
        )
    }
}

export default Logo;