import * as React from 'react';
import './Header.css';

const Header = ({ searchValue, updateSearchValue }) => {
    return (
        <header className="Header">
            <h1>مغالطات</h1>
            <h2>مرجعی برای معرفی مغالطات و مثال‌های  کاربردی آن‌ها</h2>
            <input type="search" placeholder="جست‌وجوی مغالطه..." value={searchValue} onChange={({ target }) => { updateSearchValue(target.value); }} />
        </header>
    )
};

export default Header;
