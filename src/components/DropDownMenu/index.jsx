import React, {useState} from "react";
import Button from '../Button';

import './styles.scss'

const DropDownMenu = () => {
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
                    <li><Button title="Edit"/></li>
                    <li><Button title="Delete"/></li>
                </ul>
            }
        </div>

    )
}

export default DropDownMenu;