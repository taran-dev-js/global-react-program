import React from "react";
import {Row} from 'react-bootstrap'
import PropTypes from 'prop-types'
import {FilmItem} from '../FilmItem'

export const FilmList = ({handleDeleteModal, searchResult}) => {

    return (
        <div className="film-list">
            <Row>
                {searchResult.map((item, i) => (
                    <FilmItem handleDeleteModal={handleDeleteModal}
                              key={item.id}
                              movie={item} />))}
            </Row>
        </div>
    )
}

FilmList.propTypes = {
    handleDeleteModal: PropTypes.func,
    searchResult: PropTypes.array
}

