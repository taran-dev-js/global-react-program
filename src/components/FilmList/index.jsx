import React from "react";
import {Row} from 'react-bootstrap'
import FilmItem from '../FilmItem'

export default ({searchResult}) => {
    return (
        <div className="film-list">
            <Row>
                {searchResult.map((item, i) => (<FilmItem key={i} {...item} />))}
            </Row>
        </div>
    )
}