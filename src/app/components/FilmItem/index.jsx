import React from "react";
import {Col} from 'react-bootstrap'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
import {DropDownMenu} from '../DropDownMenu'

import './styles.scss'

export const FilmItem = ({movie}) => {
    const {poster_path, title, release_date, genres, vote_average, id} = movie;

    return (
        <>
            <Col md={4}>
                <Link to={`/film/${id}`} className="film-item">
                    <div className="film-item__img">
                        <DropDownMenu item={movie} />
                        <img src={poster_path} alt=""/>
                    </div>
                    <div className="film-item__info">
                        <h3 className="film-item__title">{title}</h3>
                        <span className="film-item__year">{release_date}</span>
                        <span className="film-item__vote">{vote_average}</span>
                        <p className="film-item__type">
                            {genres.map((item, i) => (<span key={i}>{item}</span>))}
                        </p>
                    </div>
                </Link>
            </Col>
        </>
    )
}

FilmItem.propTypes = {
    movie: PropTypes.object,
}
