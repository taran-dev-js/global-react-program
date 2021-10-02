import React, {useEffect} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import {
    Header,
    Filter,
    ResultCount,
    FilmList,
    Footer,
    ErrorCatch,
    ModalManager
} from '../../components/';
import {getMovieThunk} from "../../store/thunks/movies";

const Home = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(() => {
        dispatch(getMovieThunk());
    }, [dispatch])

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