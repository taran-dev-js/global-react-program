import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {Button, Logo, Search} from '../../components'
import './styles.scss'
import {modalTypes} from "../../constants";
import {useDispatch} from "react-redux";
import {handleModal} from "../../store/thunks/movies";

export const Header = () => {
    const dispatch = useDispatch();

    const handleClickModal = (event) => {
        event.preventDefault()
        const { target: { dataset: { modal }}} = event
        if (modal) dispatch(handleModal({name: modal}));
    }

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
                                    data-modal={modalTypes.addModal}
                                    onClick={handleClickModal}
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
