import React from "react";
import PropTypes from 'prop-types'
import {Button} from '../Button'
import ReactDOM from 'react-dom'
import './styles.scss'
import {useDispatch} from "react-redux";
import {handleModal} from "../../store/thunks/movies";
const modalRootEl = document.getElementById('modal-root')

export const Modal = ({isOpen, title, subtitle, children}) => {
    const dispatch = useDispatch();

    const handleEditModal = () => {
        dispatch(handleModal({name: '', movie: null}));
    }

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className='c-modal isOpen'>
            <div className="c-modal__wrap">
                <Button style="c-modal__close" onClick={handleEditModal} title="X"/>
                <div className="c-modal__container">
                    <h2 className="c-modal__title">{title}</h2>
                    <p className="c-modal__subtitle">{subtitle}</p>
                    <div className="c-modal__content">
                        {children}
                    </div>
                </div>
            </div>
        </div>,
        modalRootEl
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.any
}