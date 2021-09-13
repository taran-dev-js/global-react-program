import React from "react";
import {FormGroup} from "../../Form/FormGroup";
import {Button} from "../../Button";
import {useDispatch} from "react-redux";
import {postMovieThunk} from "../../../store/thunks/movies";
import {useFormik} from 'formik';
import {movieModel} from "../../../constants";


export const AddModal = () => {
    const postMovieDispatch = useDispatch();


    const formik = useFormik({
        initialValues: {},
        onSubmit: values => {
            postMovieDispatch(postMovieThunk(values))
        }
    })

    return (
        <>

            <form action="#" className="form" onSubmit={formik.handleSubmit}>
                <FormGroup onChange={formik.handleChange}
                           htmlFor={movieModel.title} labelTitle="Title" />
                <FormGroup onChange={formik.handleChange}
                           htmlFor={movieModel.releaseDate} labelTitle="Release date" />
                <FormGroup onChange={formik.handleChange} htmlFor={movieModel.posterPath} labelTitle="Movie url"/>
                <FormGroup htmlFor={movieModel.genres} labelTitle="Genre" select={true}>
                    <select onChange={formik.handleChange} name="genre" id={movieModel.genres}>
                        <option value="comedy">Comedy</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </FormGroup>
                <FormGroup onChange={formik.handleChange} htmlFor={movieModel.overview} labelTitle="Overview"/>
                <FormGroup onChange={formik.handleChange} type="number" htmlFor={movieModel.runtime} labelTitle="Runtime"/>
                <div className="form__btn">
                    <Button title="Reset" style="button--transparent"/>
                    <Button title="Save" type="submit"/>
                </div>
            </form>

        </>
    )

};