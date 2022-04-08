import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {useSelector} from 'react-redux'
import {
    Header,
    Filter,
    ResultCount,
    FilmList,
    Footer,
    ErrorCatch,
    ModalManager
} from '../../components/';


const Home = () => {
    const movies = useSelector(({movies}) => movies);

    return (
        <>
            <Header/>
            <main>
                <Container>
                    <Row>
                        <Col>
                            <ErrorCatch>
                                <Filter/>
                                <ResultCount filmsCount={movies.length}/>
                                <FilmList searchResult={movies} />
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