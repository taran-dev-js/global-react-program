import React from "react"
import {Modal} from "../index";
import {Button} from "../../Button";
import {FormModal} from "../FormModal";
import {useDispatch, useSelector} from "react-redux";
import {modalTypes} from "../../../constants";
import {deleteMovieThunk} from "../../../store/thunks/movies";


export const ModalManager = () => {
    const deleteMovieDispatch = useDispatch();
    const openModal = useSelector(({openModal}) => openModal);

    const handleDeleteForm = (e) => {
        e.preventDefault();
        deleteMovieDispatch(deleteMovieThunk(openModal.movie))
    };

    return (
        <>
            <Modal isOpen={openModal.name === modalTypes.deleteModal}
                   title="Delete"
                   subtitle="Are you sour you wont to delete this movie?">
                <form onSubmit={handleDeleteForm}>
                    <Button title="Confirm" type="submit"/>
                </form>
            </Modal>
            <Modal isOpen={openModal.name === modalTypes.addModal} title="Add movie">
                <FormModal />
            </Modal>
            <Modal isOpen={openModal.name === modalTypes.editModal} title="Edit movie">
                <FormModal />
            </Modal>
        </>
    )
}