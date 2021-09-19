import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types'
import Logo from "../Logo";
import Input from '../Input'
import Button from '../Button'
import Search from '../Search'
import './styles.scss'
import {ReactComponent as SearchIcon}from '../../assests/search_icon.svg'

const MovieHeader = ({movie}) => {

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
                                <Button title="Search"/>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="header__movie">
                    <Row>
                        <Col>
                            <div className="header-movie">
                                <div className="header-movie__img">
                                    <img src={movie.img} alt=""/>
                                </div>
                                <div className="header-movie__info">
                                    <div className="header-movie__title">
                                        <h2>{movie.title}</h2> <span>{movie.rating}</span>
                                    </div>
                                    <p className="header-movie__subtitle">{movie.subtitle}</p>
                                    <span className="header-movie__year">{movie.year}</span>
                                    <span className="header-movie__duration">{movie.duration}</span>
                                    <div className="header-movie__descr">{movie.description}</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </header>
    )
}

export default MovieHeader;
