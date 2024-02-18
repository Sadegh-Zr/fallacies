import * as React from 'react';
import { LuInfo } from "react-icons/lu";

import './Header.css';
import ModalInfo from '../ModalInfo';
import FilterButton from '../FilterButton';
import { FILTER_OPTIONS } from '../../constants';

const Header = ({ searchValue, updateSearchValue, filterValue, updateFilterValue }) => {
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
            <h2>مرجعی برای رشد تفکر منطقی به وسیله معرفی و توضیح مغالطات به همراه مثال‌های مختلف و آزمون</h2>
            <div className='Header__filterContainer'>
                <FilterButton options={FILTER_OPTIONS} value={filterValue} updateValue={updateFilterValue} />
                <input type="search" placeholder="جست‌وجوی مغالطه..." value={searchValue} onChange={({ target }) => { updateSearchValue(target.value); }} />
            </div>
            <ModalInfo isVisible={isModalInfoVisible} toggle={toggleModalInfo} />
        </header>
    )
};

export default Header;
