import React from "react";
import {Col} from 'react-bootstrap'
import PropTypes from 'prop-types'
import DropDownMenu from '../DropDownMenu'

import './styles.scss'

const FilmItem = ({img, title, year, type}) => {

    return (
        <Col md={4}>
            <div className="film-item">
                <div className="film-item__img">
                    <DropDownMenu/>
                    <img src={img} alt=""/>
                </div>
                <div className="film-item__info">
                    <h3 className="film-item__title">{title}</h3>
                    <span className="film-item__year">{year}</span>
                    <p className="film-item__type">{type}</p>
                </div>
            </div>
        </Col>
    )
}

FilmItem.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    type: PropTypes.string
}

export default FilmItem;