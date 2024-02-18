import * as React from 'react';
import { LuListFilter } from "react-icons/lu";
import './FilterButton.css';

const FilterButton = ({ value, updateValue, options }) => {
    const container = React.useRef(null);
    const [isOpen, updateOpenState] = React.useState(false);

    React.useEffect(() => {
        const handleTouchStart = e => {
            if (e.target === container.current || container.current.contains(e.target)) return;
            updateOpenState(false);
        }
        window.addEventListener('touchstart', handleTouchStart);
        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
        }
    }, []);

    return (
        <div ref={container} className='FilterButton'>
            <button onClick={() => { updateOpenState(!isOpen); }} className='FilterButton__toggle'>
                <LuListFilter  />
            </button>
            <div className={`FilterButton__list ${isOpen ? '' : '-hidden'}`}>
                {options.map(option => {
                    const handleClick = () => { 
                        updateValue(option.value); 
                        updateOpenState(false) 
                    };
                    return (
                        <button disabled={!isOpen} onClick={handleClick} className={option.value === value ? '-selected' : ''} key={option.value}>{option.title}</button>
                    );
                })}
            </div>
        </div>
    );
};

export default FilterButton;
