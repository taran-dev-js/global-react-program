import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

export const FormGroup = ({select = false, htmlFor, labelTitle, children, value, onChange, type = 'text'}) => {
    return (
        <div className="form__group">
            <label htmlFor={htmlFor}>{labelTitle}</label>
            {select ? children : <input type={type} id={htmlFor} value={value} onChange={onChange}/>}
            {!select ? children : null}
        </div>
    )
}

FormGroup.propTypes = {
    type: PropTypes.string,
    select: PropTypes.bool,
    htmlFor: PropTypes.string,
    labelTitle: PropTypes.string,
    children: PropTypes.any
}