import React from "react";
import "./styles.scss"

export const Input = ({type, title, ...rest}) => {
    return <input type={type} placeholder={title} className="input" {...rest}/>
}