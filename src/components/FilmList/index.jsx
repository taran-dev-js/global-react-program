import React from "react";
import {Row} from 'react-bootstrap'
import PropTypes from 'prop-types'
import FilmItem from '../FilmItem'

const FilmList = ({searchResult}) => {
    return (
        <div className="film-list">
            <Row>
                {searchResult.map((item, i) => (<FilmItem key={i} {...item} />))}
            </Row>
        </div>
    )
}

FilmList.propTypes = {
    searchResult: PropTypes.array
}

export default FilmList;