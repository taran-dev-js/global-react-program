import React from "react";
import "./styles.scss"

export const Input = ({type, title}) => {
    return <input type={type} placeholder={title} className="input"/>
}