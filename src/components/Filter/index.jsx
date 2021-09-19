import React from "react";
import {Button} from '../Button'

import "./styles.scss"
import {useDispatch, useSelector} from "react-redux";
import {filterMovieThunk, sortMovieThunk} from "../../store/thunks/movies";
import {genresTypes, sortingTypes} from "../../constants";

export const Filter = () => {
    const {filter, sortBy} = useSelector((state) => state);
    const filterMovieDispatch = useDispatch();
    const sortMovieDispatch = useDispatch();

    const handleFilterClick = (event) => {
        const {target: {dataset: {filter}}} = event
        filterMovieDispatch(filterMovieThunk(filter));
    }

    const filterItems = genresTypes.map((item, key) => (
        <div className={`filter__item ${filter === item ? 'active' : null}`} key={key}>
            <Button title={item} data-filter={item} style="button--base" onClick={handleFilterClick}/>
        </div>
    ))

    const sortingItems = Object.keys(sortingTypes).map(key => (
        <option key={key} value={sortingTypes[key]}>{key.toUpperCase()}</option>
    ))

    const handleChangeSelect = (e) => {
        sortMovieDispatch(sortMovieThunk(e.target.value))
    }

    return (
        <div className="filter">
            <div className="filter__list">
                {filterItems}
            </div>
            <div className="filter__sort">
                <div className="filter__sort-item">
                    <p>Sort by</p>
                    <select name="sortBy" id="sortBy" value={sortBy} onChange={handleChangeSelect}>
                        {sortingItems}
                    </select>
                </div>
            </div>
        </div>
    )
}