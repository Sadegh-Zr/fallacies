import * as React from 'react';
import { LuInfo } from "react-icons/lu";
import { isBrowser } from '../../utils';

import './Header.css';
import ModalInfo from '../ModalInfo';

const Header = ({ searchValue, updateSearchValue }) => {
    const isModalInfoShownFromStorage = !JSON.parse(isBrowser ? localStorage.getItem('hasInfoShown') : false);
    const [isModalInfoVisible, setModalInfoVisibility] = React.useState(isModalInfoShownFromStorage);
    const installPrompt = React.useRef();
    React.useEffect(() => {
        const handleBeforeInstall = (event) => {
          if(!event.prompt) return;
          event.preventDefault();
          installPrompt.current = event;
        }
        window.addEventListener('beforeinstallprompt', handleBeforeInstall);
        return () => {
          window.removeEventListener('beforeinstallprompt', handleBeforeInstall, true);
        }
      }, []);

      const toggleModalInfo = () => {
        if (isModalInfoVisible) {
          if (!JSON.parse(localStorage.getItem('hasInfoShown'))) {
            if(installPrompt.current?.prompt) installPrompt.current.prompt();
          }
          setModalInfoVisibility(false);
          localStorage.setItem('hasInfoShown', true);
        } else setModalInfoVisibility(true);
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
            <h2>مرجعی برای تسلط بر مغالطات به همراه مثال‌های کاربردی و آزمون‌گیری</h2>
            <input type="search" placeholder="جست‌وجوی مغالطه..." value={searchValue} onChange={({ target }) => { updateSearchValue(target.value); }} />
            <ModalInfo isVisible={isModalInfoVisible} toggle={toggleModalInfo} />
        </header>
    )
};

export default Header;
