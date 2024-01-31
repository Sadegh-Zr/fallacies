import * as React from 'react';
import './ChoiceList.css';

const ChoiceList = ({ items, value, onChange }) => {
    const renderChoices = () => items.map(item => {
        return (
            <button key={item.value} className={`ChoiceList__choice ${value === item.value ? '-selected' : ''}`} onClick={() => { onChange(item.value); }}>{item.text}</button>
        )
    })
    return (
        <div className='ChoiceList'>
            {renderChoices()}
        </div>
    );
};

export default ChoiceList;
