import React, {useEffect} from "react";
import {Input, Button} from "../../components";
import {useDispatch} from "react-redux";
import {searchMovieThunk} from "../../store/thunks/movies";
import history from 'history/browser';
import {useQuery} from '../../hooks/useQuery'
import "./styles.scss";

export const Search = () => {
    const dispatch = useDispatch();
    const query = useQuery();

    useEffect(() => {
        const search = query.get('search')
        dispatch(searchMovieThunk(search))
    }, [dispatch]);

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const {target: {search: {value}}} = event
        if (!value) return;

        history.push({
            pathname: '/search',
            search: `?search=${value}`
        })

        dispatch(searchMovieThunk(value))
    }

    return (
        <form className="search" onSubmit={handleSearchSubmit}>
            <Input type="text" title="Find your movie..." name='search'/>
            <Button title="SEARCH" style="button--accent"/>
        </form>
    )

}