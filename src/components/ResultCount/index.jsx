import React from "react";

import "./styles.scss"

export default ({filmsCount}) => {
    return (
        <div className="result-count">
            <p><strong>{filmsCount}</strong> movies found</p>
        </div>
    )
}