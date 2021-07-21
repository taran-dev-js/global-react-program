import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Logo from "../Logo";
import Input from '../Input'
import Button from '../Button'
import Search from '../Search'
import './styles.scss'

export default () => {

    return (
    <header className="header">
        <Container>
            <div className="header__top">
                <Row>
                    <Col md={3}>
                        <Logo />
                    </Col>
                    <Col md={{span: 3, offset: 6}}>
                        <div className="header__top-btn">
                            <Button style="button--transparent" title="+ ADD MOVIE"/>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="header__bottom">
                <Row>
                    <Col md={{span: 8, offset: 2}}>
                        <div className="header__search">
                            <h3>Find your movie</h3>
                            <Search/>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </header>
    )
}
