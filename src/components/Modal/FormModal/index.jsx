import React from "react";
import {FormGroup} from "../../Form/FormGroup";
import {Button} from "../../Button";
import {useDispatch, useSelector} from "react-redux";
import {handleModal, postMovieThunk, updateMovieThunk} from "../../../store/thunks/movies";
import {useFormik} from 'formik';
import {genresTypes, modalTypes, movieModel} from "../../../constants";
import * as Yup from 'yup';

export const FormModal = () => {
    const postMovieDispatch = useDispatch();
    const updateMovieDispatch = useDispatch();
    const closeModalDispatch = useDispatch();

    const state = useSelector((state) => state);
    const {openModal: {name: activeModal, movie: activeModalID}} = state;
    const currentMovie = state.movies.find(item => item.id === activeModalID);

    const handleCloseModal = () => {
        closeModalDispatch(handleModal({name: '', movie: null}));
    }

    const MovieFormSchema = Yup.object().shape({
        [movieModel.title]: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        [movieModel.posterPath]: Yup.string()
            .min(10, 'Too Short!')
            .required('Required'),
        [movieModel.overview]: Yup.string()
            .min(10, 'Too Short!')
            .required('Required'),
        [movieModel.runtime]: Yup.number()
            .min(2, 'Too Short!')
            .required('Required')
    });

    const initialValues = activeModal === modalTypes.editModal ? {
        [movieModel.title]: currentMovie.title,
        [movieModel.releaseDate]: currentMovie[movieModel.releaseDate],
        [movieModel.posterPath]: currentMovie[movieModel.posterPath],
        [movieModel.overview]: currentMovie[movieModel.overview],
        [movieModel.runtime]: currentMovie[movieModel.runtime],
    } : {
        [movieModel.title]: '',
        [movieModel.releaseDate]: '',
        [movieModel.posterPath]: '',
        [movieModel.overview]: '',
        [movieModel.runtime]: '',
    };

    const formik = useFormik({
        initialValues,
        validationSchema: MovieFormSchema,
        onSubmit: values => {
            switch (activeModal) {
                case modalTypes.editModal:
                    values.id = activeModalID
                    updateMovieDispatch(updateMovieThunk(values))
                    handleCloseModal()
                    break;
                case modalTypes.addModal:
                    postMovieDispatch(postMovieThunk(values))
                    handleCloseModal()
                    break;
            }
        }
    })

    const genresOption = activeModal === modalTypes.editModal ?
        currentMovie[movieModel.genres].map((value, key) => <option value={value} label={value} key={key}/>)
        : genresTypes.map((value, key) => <option value={value} label={value} key={key}/>)

    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            {activeModal === modalTypes.editModal ? (
                <div className="form__group">
                    <p className="label">Movie id</p>
                    <p className="form__text">{activeModalID}</p>
                </div>
            ) : null}
            <FormGroup onChange={formik.handleChange}
                       value={formik.values[movieModel.title]}
                       htmlFor={movieModel.title}
                       labelTitle="Title">
                {formik.errors[movieModel.title] ? (
                    <p>{formik.errors[movieModel.title]}</p>
                ) : null}
            </FormGroup>
            <FormGroup onChange={formik.handleChange}
                       value={formik.values[movieModel.releaseDate]}
                       htmlFor={movieModel.releaseDate}
                       labelTitle="Release date">
            </FormGroup>
            <FormGroup onChange={formik.handleChange}
                       htmlFor={movieModel.posterPath}
                       value={formik.values[movieModel.posterPath]}
                       labelTitle="Movie url">
                {formik.errors[movieModel.posterPath] ? (
                    <p>{formik.errors[movieModel.posterPath]}</p>
                ) : null}
            </FormGroup>
            <FormGroup htmlFor={movieModel.genres}
                       labelTitle="Genre"
                       select={true}>
                <select onChange={formik.handleChange} name={movieModel.genres} id={movieModel.genres}>
                    <option value="" label="Select Genre"/>
                    {genresOption}
                </select>
            </FormGroup>
            <FormGroup onChange={formik.handleChange}
                       htmlFor={movieModel.overview}
                       value={formik.values[movieModel.overview]}
                       labelTitle="Overview">
                {formik.errors[movieModel.overview] ? (
                    <p>{formik.errors[movieModel.overview]}</p>
                ) : null}
            </FormGroup>
            <FormGroup onChange={formik.handleChange}
                       type="number"
                       htmlFor={movieModel.runtime}
                       value={formik.values[movieModel.runtime]}
                       labelTitle="Runtime">
                {formik.errors[movieModel.runtime] ? (
                    <p>{formik.errors[movieModel.runtime]}</p>
                ) : null}
            </FormGroup>
            <div className="form__btn">
                <Button title="Reset" type="reset" style="button--transparent" onClick={handleCloseModal}/>
                <Button title="Save" type="submit"/>
            </div>
        </form>
    )
};