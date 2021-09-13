import React, {useEffect} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import {
    Header,
    Filter,
    ResultCount,
    FilmList,
    Footer,
    ErrorCatch
} from '../../components/';
import {getMovieThunk} from "../../store/thunks/movies";
import {ModalManager} from "../../components/Modal/ModalManager";

const Home = () => {
    const getMovieDispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(() => {
        getMovieDispatch(getMovieThunk());
    }, [getMovieDispatch])

    return (
        <>
            <Header/>
            <main>
                <Container>
                    <Row>
                        <Col>
                            <ErrorCatch>
                                <Filter/>
                                <ResultCount filmsCount={state.movies.length}/>
                                <FilmList searchResult={state.movies} />
                            </ErrorCatch>
                        </Col>
                    </Row>
                </Container>
            </main>
            <footer>
                <Footer/>
            </footer>
            <ModalManager/>
        </>
    )
};

export default Home;