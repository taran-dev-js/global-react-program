import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'


const FormGroup = ({select, htmlFor, labelTitle, children}) => {
    return (
        <div className="form__group">
            <label htmlFor={htmlFor}>{labelTitle}</label>
            {select ? children : <input type="text" id={htmlFor} />}
        </div>
    )
}

FormGroup.propTypes = {
    select: PropTypes.bool,
    htmlFor: PropTypes.string,
    labelTitle: PropTypes.string,
    children: PropTypes.any
}

export default FormGroup;