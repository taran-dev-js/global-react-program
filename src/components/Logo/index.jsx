import React from "react";
import logo from "../../assests/images/netflix-logo.png";
import './styles.scss'

export const Logo = () => {
    return (
        <div className="logo">
            <img src={logo}/>
        </div>
    )
}
