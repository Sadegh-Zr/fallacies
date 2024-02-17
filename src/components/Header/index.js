import * as React from 'react';
import { LuInfo } from "react-icons/lu";
import { isBrowser } from '../../utils';

import './Header.css';
import ModalInfo from '../ModalInfo';

const Header = ({ searchValue, updateSearchValue }) => {
    const [isModalInfoVisible, setModalInfoVisibility] = React.useState(false);
    const toggleModalInfo = () => {
      setModalInfoVisibility(!isModalInfoVisible);
    };
    return (
        <header className="Header">
            <div className='Header__subContainer'>
                <div>
                    <button className='Header__navButton' aria-label='اطلاعات اپلیکیشن' onClick={toggleModalInfo}><LuInfo color='#fff' size="2.5rem"/></button>
                </div>
                <h1 className='Header__title'>مغالطات</h1>
                <div />
            </div>
            <h2>مرجعی برای تسلط بر مغالطات به همراه مثال‌های کاربردی و آزمون</h2>
            <input type="search" placeholder="جست‌وجوی مغالطه..." value={searchValue} onChange={({ target }) => { updateSearchValue(target.value); }} />
            <ModalInfo isVisible={isModalInfoVisible} toggle={toggleModalInfo} />
        </header>
    )
};

export default Header;
