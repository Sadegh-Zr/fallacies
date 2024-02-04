import * as React from 'react';
import { LuInfo } from "react-icons/lu";

import './Header.css';
import ModalInfo from '../ModalInfo';

const Header = ({ searchValue, updateSearchValue }) => {
    const [isModalInfoVisible, setModalInfoVisibility] = React.useState(false);
    const toggleModalInfo = () => { setModalInfoVisibility(!isModalInfoVisible); };
    return (
        <header className="Header">
            <button aria-label='اطلاعات اپلیکیشن' onClick={toggleModalInfo}><LuInfo color='#fff' size="2.8rem"/></button>
            <h1>مغالطات</h1>
            <h2>مرجعی برای تسلط بر مغالطات به همراه مثال‌های کاربردی و آزمون‌گیری</h2>
            <input type="search" placeholder="جست‌وجوی مغالطه..." value={searchValue} onChange={({ target }) => { updateSearchValue(target.value); }} />
            <ModalInfo isVisible={isModalInfoVisible} toggle={toggleModalInfo} />
        </header>
    )
};

export default Header;
