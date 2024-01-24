import * as React from 'react';
import './Header.css';
import { HiOutlineMenuAlt3 } from "react-icons/hi";


const Header = ({ searchValue, updateSearchValue }) => {
    return (
        <header className="Header">
            <button className="Header__menuButton">
                <HiOutlineMenuAlt3 color='#fff' size="2.8rem" />
            </button>
            <h1>مغالطات</h1>
            <h2>مرجعی برای معرفی مغالطات و مثال‌های  کاربردی آن‌ها</h2>
            {/* <div className="Header__subContainer">
                <span>منابع</span>
                <span>چرا؟</span>
                <span>گیتهاب</span>
            </div> */}
            <input type="search" placeholder="جست‌وجوی مغالطه..." value={searchValue} onChange={({ target }) => { updateSearchValue(target.value); }} />
        </header>
    )
};

export default Header;
