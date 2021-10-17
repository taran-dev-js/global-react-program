import React from "react";
import {MovieHeader, Footer, ErrorCatch, Filter, ResultCount, FilmList} from '../../components'
import {useSelector} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";

const Movie = () => {
    const movies = useSelector(({movies}) => movies);

    const {id} = useParams();
    const getMovie = (id) => movies.find(item => item.id === Number(id))

    return (
        <>
            <MovieHeader movie={getMovie(id)}/>
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
        </>
    )
}

export default Movie;