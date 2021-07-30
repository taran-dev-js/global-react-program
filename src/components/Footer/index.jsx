import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import Logo from '../Logo'

export default () => <footer className="footer">
    <Container>
        <Row>
            <Col>
                <Logo/>
            </Col>
        </Row>
    </Container>
</footer>