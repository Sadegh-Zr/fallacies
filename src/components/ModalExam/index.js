import * as React from 'react';
import Rodal from 'rodal';
import { IoCloseOutline } from "react-icons/io5";
import 'rodal/lib/rodal.css';
import { navigate } from 'gatsby';

import './ModalExam.css';
import ChoiceList from '../ChoiceList';
import { QUESTION_NUMBERS } from '../../constants';

const ModalExam = ({ isVisible, toggle }) => {
    const [selectedNumber, updateSelectedNumber] = React.useState(QUESTION_NUMBERS[0].value);
    const goToExamPage = () => {
        navigate(`/exam?n=${selectedNumber}`);
    };

    return (
        <Rodal visible={isVisible} leaveAnimation='door' onClose={toggle} showCloseButton={false}>
            <div className='ModalExam'>
                <button aria-label='بستن' onClick={toggle} className="ModalExam__buttonClose">
                    <IoCloseOutline size="3rem" />
                </button>
                <h1 className='ModalExam__title'>آزمون</h1>
                <p className="ModalExam__description">لطفا تعداد سؤالات را مشخص نمایید.</p>
                <ChoiceList items={QUESTION_NUMBERS} value={selectedNumber} onChange={updateSelectedNumber} />
                <button aria-label='شروع آزمون' onClick={goToExamPage} className="ModalExam__submit">شروع آزمون</button>
            </div>
        </Rodal>
    )
};

export default ModalExam;