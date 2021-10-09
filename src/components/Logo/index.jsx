import React from "react";
import logo from "../../assests/images/netflix-logo.png";
import './styles.scss'
import {Link} from "react-router-dom";

export const Logo = () => {
    return (
        <Link to='/' className="logo">
            <img src={logo}/>
        </Link>
    )
}
