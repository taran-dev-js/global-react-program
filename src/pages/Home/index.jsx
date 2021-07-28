import React, {useState} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Header from '../../components/Header'
import Filter from '../../components/Filter'
import ResultCount from '../../components/ResultCount'
import FilmList from '../../components/FilmList'
import Footer from '../../components/Footer'
import ErrorCatch from '../../components/ErrorCatch'
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import FormGroup from "../../components/Form/FormGroup";

const FILMS = [
    {
        img: 'https://picsum.photos/320/400',
        title: 'Pulf',
        type: 'Action',
        year: '2019'
    },
    {
        img: 'https://picsum.photos/320/400',
        title: 'Tor',
        type: 'Action',
        year: '2015'
    }
]

const Home = () => {
    const [isOpenEditModal, setOpenEditModal] = useState(true);
    const [isOpenDeleteModal, setOpenDeleteModal] = useState(false);
    const [isOpenAddModal, setOpenAddModal] = useState(false);

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
            <Header handleAddModal={handleAddModal}/>
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

export default Home;