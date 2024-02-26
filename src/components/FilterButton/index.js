import * as React from 'react';
import { LuListFilter } from "react-icons/lu";
import './FilterButton.css';

const FilterButton = ({ value, updateValue, options }) => {
    const container = React.useRef(null);
    const [isOpen, updateOpenState] = React.useState(false);

    React.useEffect(() => {
        const handleBlur = e => {
            if (e.target === container.current || container.current.contains(e.target)) return;
            updateOpenState(false);
        }
        window.addEventListener('touchstart', handleBlur);
        window.addEventListener('click', handleBlur);
        return () => {
            window.removeEventListener('touchstart', handleBlur);
            window.removeEventListener('click', handleBlur);
        }
    }, []);

    const handleTransitionEnd = ({ currentTarget }) => {
        if (currentTarget.classList.contains('-hidden')) currentTarget.style.visibility = 'hidden';
        else currentTarget.style.visibility = 'visible';
    };

    return (
        <div ref={container} className='FilterButton'>
            <button onClick={() => { updateOpenState(!isOpen); }} className='FilterButton__toggle'>
                <LuListFilter  />
            </button>
            <div onTransitionEnd={handleTransitionEnd} className={`FilterButton__list ${isOpen ? '' : '-hidden'}`}>
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
