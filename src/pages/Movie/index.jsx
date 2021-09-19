import React, {useEffect, useState} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import MovieHeader from '../../components/MovieHeader'
import Filter from '../../components/Filter'
import ResultCount from '../../components/ResultCount'
import FilmList from '../../components/FilmList'
import Footer from '../../components/Footer'
import ErrorCatch from '../../components/ErrorCatch'
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import FormGroup from "../../components/Form/FormGroup";
import {useAddBodyClass} from "../../hooks/add-body-class";

const FILMS = [
    {
        img: 'https://picsum.photos/320/400',
        title: 'Pulf',
        subtitle: 'Lorem Ipsum has been the industry',
        type: 'Action',
        year: '2019',
        duration: '140 min',
        rating: '4.6',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        img: 'https://picsum.photos/320/400',
        title: 'Tor',
        subtitle: 'Lorem Ipsum has been the industry',
        type: 'Action',
        year: '2015',
        duration: '157 min',
        rating: '4.0',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }
]

const Movie = () => {
    const [isOpenEditModal, setOpenEditModal] = useState(false);
    const [isOpenDeleteModal, setOpenDeleteModal] = useState(false);
    const [isOpenAddModal, setOpenAddModal] = useState(false);

    useAddBodyClass('testClass');

    const handleDeleteModal = () => {
        setOpenDeleteModal(true)
    }

    const handleEditModal = () => {
        setOpenEditModal(true)
    }

    const handleAddModal = () => {
        setOpenAddModal(true)
    }

    const handleModalClose = () => {
        setOpenEditModal(false)
        setOpenDeleteModal(false)
        setOpenAddModal(false)
    }

    const formTemplate = () => (
        <form action="#" className="form">
            <div className="form__group">
                <p className="label">Movie id</p>
                <p className="form__text">MR09SFS9S</p>
            </div>
            <FormGroup htmlFor="filmTitle" labelTitle="Title"/>
            <FormGroup htmlFor="filmDate" labelTitle="Release date"/>
            <FormGroup htmlFor="filmURL" labelTitle="Movie url"/>
            <FormGroup htmlFor="filmGenre" labelTitle="Genre" select={true}>
                <select name="genre" id="filmGenre">
                    <option value="comedy">Comedy</option>
                    <option value="documentary">Documentary</option>
                </select>
            </FormGroup>
            <FormGroup htmlFor="filmOverview" labelTitle="Overview"/>
            <FormGroup htmlFor="filmRuntime" labelTitle="Runtime"/>
            <div className="form__btn">
                <Button title="Reset" style="button--transparent"/>
                <Button title="Save"/>
            </div>
        </form>
    );

    return (
        <>
            <MovieHeader movie={FILMS[0]}/>
            <main>
                <Container>
                    <Row>
                        <Col>
                            <ErrorCatch>
                                <Filter/>
                                <ResultCount filmsCount={FILMS.length}/>
                                <FilmList searchResult={FILMS}
                                          handleEditModal={handleEditModal}
                                          handleDeleteModal={handleDeleteModal}/>
                            </ErrorCatch>
                        </Col>
                    </Row>
                </Container>
            </main>
            <footer>
                <Footer/>
            </footer>

            <Modal isOpen={isOpenEditModal} title="Edit movie" closeHandle={handleModalClose}>
                {formTemplate()}
            </Modal>
            <Modal isOpen={isOpenDeleteModal}
                   title="Delete"
                   subtitle="Are you sour you wont to delete this movie?"
                   closeHandle={handleModalClose}>
                <Button title="Confirm"/>
            </Modal>
            <Modal isOpen={isOpenAddModal} title="Add movie" closeHandle={handleModalClose}>
                {formTemplate()}
            </Modal>
        </>
    )
}

export default Movie;