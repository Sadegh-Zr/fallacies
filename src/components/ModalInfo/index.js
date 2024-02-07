import * as React from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import './ModalInfo.css';
import { IoCloseOutline } from "react-icons/io5";

const ModalInfo = ({ isVisible, toggle }) => {
    return (
        <Rodal visible={isVisible} leaveAnimation='door' onClose={toggle} showCloseButton={false}>
        <div className='ModalInfo'>
            <button aria-label='بستن' className="ModalInfo__closeIconButton" onClick={toggle}>
                <IoCloseOutline size="3rem" />
            </button>
            <h1>درباره اپلیکیشن</h1>
            <p>با سلام! این برنامه را با توجه به کتاب «مغالطات» دکتر علی اصغر خندان طراحی کردم. علاوه بر استفاده از مثال‌ها و سؤالات خود کتاب که با توجه به آنچه صلاح به نظر می‌رسید، تغییراتی در برخی از آن‌ها دادم، بعضی مثال‌ها و سؤالات را نیز به محتوا افزودم. امیدوارم که این مجموعه مورد رضایت امام زمان -عجل الله تعالی فرجه الشریف- قرار بگیرد.</p>
            <p>این برنامه به صورت PWA <a href='https://github.com/Sadegh-Zr/fallacies' target='_blank'>توسعه داده شده است</a>؛ بنابراین می‌توانید به راحتی آن را نصب کرده و به شکل آفلاین از آن استفاده کنید.</p>
            <p>برای نظرات، پیشنهادات و انتقادات، می‌توانید از طریق <a href='mailto:sadegh.zarinmehr@gmail.com' target='_blank'>ایمیل</a> و <a href='https://eitaa.com/sadegh_zr' target='_blank'>پیامبرسان ایتا</a> با من در ارتباط باشید.</p>
            <button aria-label='بسیار خب!' className='ModalInfo__close' onClick={toggle}>بسیار خب!</button>
        </div>
    </Rodal>
    )
};

export default ModalInfo;
