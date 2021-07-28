import React, {useState} from "react";
import {Row} from 'react-bootstrap'
import PropTypes from 'prop-types'
import FilmItem from '../FilmItem'
import Modal from '../Modal'

const FilmList = ({ handleEditModal, handleDeleteModal, searchResult}) => {


    return (
        <div className="film-list">
            <Row>
                {searchResult.map((item, i) => (
                    <FilmItem handleEditModal={handleEditModal}
                              handleDeleteModal={handleDeleteModal}
                              key={i}
                              {...item} />))}
            </Row>
        </div>
    )
}

FilmList.propTypes = {
    searchResult: PropTypes.array
}

export default FilmList;