import React from "react";
import PropTypes from 'prop-types'
import Button from '../Button'

import './styles.scss'

const Modal = ({isOpen, title, subtitle, closeHandle, children}) => {

    return (isOpen ?
        <div className={`c-modal c-modal--delete ${isOpen ? 'isOpen' : ''}`}>
            <div className="c-modal__wrap">
                <Button style="c-modal__close" onClick={closeHandle} title="X"></Button>
                <div className="c-modal__container">
                    <h2 className="c-modal__title">{title}</h2>
                    <p className="c-modal__subtitle">{subtitle}</p>
                    <div className="c-modal__content">
                        {children}
                    </div>
                </div>
            </div>

        </div> : ''
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.any
}

export default Modal;