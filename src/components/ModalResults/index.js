import * as React from 'react';
import './ModalResults.css';
import { EXAM_RESULTS_RANGE } from '../../constants';
import { isInRange, toFarsiNumber } from '../../utils';
import questionsJSON from '../../../content/questions.json';
import { navigate } from 'gatsby';
import { GoHome } from "react-icons/go";

const ModalResults = ({ questions }) => {
    const { length: correctAnswersCount } = questions.filter(question => !question.hasError);
    const correctPercentage = (correctAnswersCount / questions.length * 100);
    const wrongAnswers = questions.filter(question => question.hasError);
    const { color } = EXAM_RESULTS_RANGE.find(range => isInRange(correctPercentage, range));
    React.useEffect(() => {
        document.querySelector('meta[name="theme-color"]').setAttribute('content',  color);
    }, []);

    const goHome = () => {
        navigate('/', { replace: true })
    }
    const renderText = () => {
        if (correctPercentage === 100) return "بسیار عالی! شما تمام سؤالات را به درستی پاسخ دادید"
        else if (correctPercentage === 0) return "متأسفانه شما موفق نشدید به هیچ سؤالی پاسخ صحیح بدهید."
        else if (correctPercentage >= EXAM_RESULTS_RANGE[EXAM_RESULTS_RANGE.length - 1].start) {
            return `خوب است! شما به ${toFarsiNumber(correctAnswersCount)} سؤال از ${toFarsiNumber(questions.length)} سؤال پاسخ صحیح دادید`;
        }
        else if (correctPercentage >= EXAM_RESULTS_RANGE[EXAM_RESULTS_RANGE.length - 2].start) {
            return `قابل بهبود است! شما به ${toFarsiNumber(correctAnswersCount)} سؤال از ${toFarsiNumber(questions.length)} سؤال پاسخ صحیح دادید`;
        }
        else return `مطلوب نیست! شما به ${toFarsiNumber(correctAnswersCount)} سؤال از ${toFarsiNumber(questions.length)} سؤال پاسخ صحیح دادید`;
    };

    const renderDescription = () => {
        if (correctPercentage === 100) return `البته شما تنها به ${toFarsiNumber(questions.length)} سؤال از مجموع ${toFarsiNumber(questionsJSON.list.length)} سؤال در بانک سؤالات ما پاسخ دادید. ممکن است در تشخیص مغالطات دیگر دچار خطا شوید :) لذا پیشنهاد می‌شود هر از گاهی مجددا آزمون بدهید.`;
        else if (correctPercentage >= EXAM_RESULTS_RANGE[EXAM_RESULTS_RANGE.length - 1].start) return `پیشنهاد می‌کنیم برای تسلط کامل و رفع اشکالات، به صفحه اصلی مراجعه کنید. ${wrongAnswers.length === 1 ? 'مغالطه‌ای' : 'مغالطاتی'} که در تشخیص ${wrongAnswers.length === 1 ? 'آن' : 'آن‌ها'} خطا داشتید، با رنگ متمایز، مشخص ${wrongAnswers.length === 1 ? 'شده است' : 'شده‌اند'}.`
        else return 'پیشنهاد می‌کنیم برای آگاهی بیش‌تر و رفع اشکالات، به صفحه اصلی مراجعه کنید. مغالطاتی که در تشخیص آن‌ها خطا داشتید، با رنگ متمایز، مشخص شده‌اند.'
    };

    return (
        <div style={{ background: color }} className='ModalResults'>
            <h1>{renderText()}</h1>
            <h2>درصد شما: {toFarsiNumber((correctPercentage === 100) || (correctPercentage === 0) ? correctPercentage : correctPercentage.toFixed(1))}</h2>
            <p>{renderDescription()}</p>
            <button onClick={goHome}><GoHome size="2.3rem" /> صفحه اصلی</button>
        </div>
    );
};

export default ModalResults;
