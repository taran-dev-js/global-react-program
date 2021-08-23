import React from "react";

import './styles.scss'

const Button = ({title, style = 'button--accent', onClick}) =>
    <button className={`button ${style}`} onClick={onClick}>{title}</button>;

export default Button;
