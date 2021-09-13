import React from "react";
import {Col} from 'react-bootstrap'
import PropTypes from 'prop-types'
import {DropDownMenu} from '../DropDownMenu'

import './styles.scss'
import {Modal} from "../Modal";
import {EditModal} from "../Modal/FormModal";
import {useDispatch, useSelector} from "react-redux";
import {handleModal} from "../../store/thunks/movies";

export const FilmItem = ({ handleDeleteModal, movie}) => {
    const {poster_path, title, release_date, genres, id} = movie;

    return (
        <>
            <Col md={4}>
                <div className="film-item">
                    <div className="film-item__img">
                        <DropDownMenu item={movie} />
                        <img src={poster_path} alt=""/>
                    </div>
                    <div className="film-item__info">
                        <h3 className="film-item__title">{title}</h3>
                        <span className="film-item__year">{release_date}</span>
                        <p className="film-item__type">
                            {genres.map((item, i) => (<span key={i}>{item}</span>))}
                        </p>
                    </div>
                </div>
            </Col>
        </>

    )
}

FilmItem.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    type: PropTypes.string
}
