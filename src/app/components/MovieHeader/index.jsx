import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {Button, Logo} from '../../components'
import './styles.scss'

export const MovieHeader = ({movie}) => {
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
                                    <img src={movie.poster_path} alt=""/>
                                </div>
                                <div className="header-movie__info">
                                    <div className="header-movie__title">
                                        <h2>{movie.title}</h2> <span>{movie.vote_average}</span>
                                    </div>
                                    {/*<p className="header-movie__subtitle">{movie.subtitle}</p>*/}
                                    <span className="header-movie__year">{movie.release_date}</span>
                                    <span className="header-movie__duration">{movie.runtime}</span>
                                    <div className="header-movie__descr">{movie.overview}</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </header>
    )
}

