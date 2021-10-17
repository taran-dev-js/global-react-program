import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {
    Header,
    Footer,
    ModalManager
} from '../../components/';
import './styles.scss'

const EmptyPage = () => {

    return (
        <>
            <Header/>
            <main className='empty-page'>
                <Container>
                    <Row>
                        <Col>
                            <h3>No Movie Found</h3>
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

export default EmptyPage;