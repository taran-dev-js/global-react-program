import React from "react";
import PropTypes from 'prop-types'

import "./styles.scss"

const ResultCount = ({filmsCount}) => {
    return (
        <div className="result-count">
            <p><strong>{filmsCount}</strong> movies found</p>
        </div>
    )
}

ResultCount.propTypes = {
    filmsCount: PropTypes.number
}

export default ResultCount;