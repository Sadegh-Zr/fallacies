import * as React from 'react';
import Rodal from 'rodal';
import { IoCloseOutline } from "react-icons/io5";
import 'rodal/lib/rodal.css';
import { Link, graphql, useStaticQuery } from 'gatsby';

import './ModalExam.css';
import ChoiceList from '../ChoiceList';
import { toFarsiNumber } from '../../utils';

const ModalExam = ({ isVisible, toggle }) => {
    const { allFile } = useStaticQuery(graphql`
        query {
            allFile {
                nodes {
                    name
                }
            }
        }
    `);

    const questionNumbers = allFile.nodes.sort((a, b) => Number(a.name) - Number(b.name)).map(node => ({ value: node.name, text: toFarsiNumber(node.name) }));
    const [selectedNumber, updateSelectedNumber] = React.useState(questionNumbers[0].value);
    return (
        <Rodal visible={isVisible} leaveAnimation='door' onClose={toggle} showCloseButton={false}>
            <div className='ModalExam'>
                <div className='ModalExam__titleContainer'>
                    <div>
                        <button aria-label='بستن' onClick={toggle} className="ModalExam__buttonClose">
                            <IoCloseOutline size="3rem" />
                        </button>
                    </div>
                    <h1 className='ModalExam__title'>آزمون</h1>
                    <div />
                </div>
                <p className="ModalExam__description">لطفا تعداد سؤالات را مشخص نمایید.</p>
                <ChoiceList items={questionNumbers} value={selectedNumber} onChange={updateSelectedNumber} />
                <p className='ModalExam__note'>دقت داشته باشید که از هر سؤال می‌توان برداشت‌های مختلفی نمود. سعی کنید متناسب‌ترین گزینه را انتخاب نمایید.</p>
                <Link className="ModalExam__submit" to={`/exam/${selectedNumber}`}>شروع آزمون</Link>
            </div>
        </Rodal>
    )
};

export default ModalExam;