import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Header from '../../components/Header'
import Filter from '../../components/Filter'
import ResultCount from '../../components/ResultCount'
import FilmList from '../../components/FilmList'
import Footer from '../../components/Footer'
import ErrorCatch from '../../components/ErrorCatch'

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
    return (
        <>
            <Header/>
            <main>
                <Container>
                    <Row>
                        <Col>
                            <ErrorCatch>
                                <Filter/>
                                <ResultCount filmsCount={0}/>
                                <FilmList searchResult={FILMS}/>
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

export default Home;