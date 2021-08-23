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
                <div className="filter__item">
                    <Button title="Comedy" style="button--base"/>
                </div>
            </div>
            <div className="filter__sort">
                <div className="filter__sort-item">
                    <p>Sort by</p>
                    <select name="sortBy" id="sortBy">
                        <option value="data">Release date</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>
        </div>
    )
}