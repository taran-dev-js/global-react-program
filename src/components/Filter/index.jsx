import React from "react";
import Button from '../Button'

import "./styles.scss"

export default () => {
    return (
        <div className="filter">
            <div className="filter__list">
                <div className="filter__item">
                    <Button title="All" style="button--base"/>
                </div>
                <div className="filter__item">
                    <Button title="Documentary" style="button--base"/>
                </div>
            </div>
        </div>
    )
}