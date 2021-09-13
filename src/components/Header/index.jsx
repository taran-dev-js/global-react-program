import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types'
import Logo from "../Logo";
import Input from '../Input'
import Button from '../Button'
import Search from '../Search'
import './styles.scss'

const Header = ({handleAddModal}) => {

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
                            <Button style="button--transparent"
                                    onClick={handleAddModal}
                                    title="+ ADD MOVIE"/>
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

Header.propTypes = {
    handleAddModal: PropTypes.func,
}

export default Header;
