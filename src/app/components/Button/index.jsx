import React from "react";

import "./styles.scss";

export const Button = ({title, style = 'button--accent', ...rest}) =>
    <button className={`button ${style}`} {...rest}>{title}</button>;

