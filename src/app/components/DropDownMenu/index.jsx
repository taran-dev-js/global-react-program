import React, {useState} from "react";
import {Button} from '../Button';
import './styles.scss'
import {useDispatch} from "react-redux";
import {handleModal} from "../../store/thunks/movies";
import {modalTypes} from "../../constants";

export const DropDownMenu = ({item}) => {
    const [isOpenMenu, setOpenMenu] = useState(false);

    const handleMenuClick = () => { setOpenMenu(!isOpenMenu) }
    const dispatch = useDispatch();

    const handleClickModal = (event) => {
        event.preventDefault()
        const { target: { dataset: { modal, movie }}} = event
        if (modal && movie) dispatch(handleModal({name: modal, movie: +movie}));
    }

    return (
        <div className={`c-dropdown-menu ${isOpenMenu ? 'isOpen' : 'isClose'}`}>
            <button className="c-dropdown-menu__btn" onClick={handleMenuClick}>
                {isOpenMenu ? 'x' : 'menu'}
            </button>
            {
                isOpenMenu &&
                <ul>
                    <li><Button title="Edit"  data-modal={modalTypes.editModal} data-movie={item.id} onClick={handleClickModal}/></li>
                    <li><Button title="Delete" data-modal={modalTypes.deleteModal} data-movie={item.id} onClick={handleClickModal}/></li>
                </ul>
            }
        </div>
    )
}