import React, {useState} from "react";
import Button from '../Button';

import './styles.scss'

const DropDownMenu = ({handleEditModal, handleDeleteModal}) => {
    const [isOpenMenu, setOpenMenu] = useState(false);

    const handleMenuClick = (e) => {
        setOpenMenu(!isOpenMenu);
    }
    return (
        <div className={`c-dropdown-menu ${isOpenMenu ? 'isOpen' : 'isClose'}`}>
            <button className="c-dropdown-menu__btn" onClick={handleMenuClick}>
                {isOpenMenu ? 'x' : 'menu'}
            </button>
            {
                isOpenMenu &&
                <ul>
                    <li><Button title="Edit" onClick={handleEditModal}/></li>
                    <li><Button title="Delete" onClick={handleDeleteModal}/></li>
                </ul>
            }
        </div>

    )
}

export default DropDownMenu;