import React from "react";
import "./styles.scss"

export default ({type, title}) => {
    return <input type={type} placeholder={title} className="input"/>
}