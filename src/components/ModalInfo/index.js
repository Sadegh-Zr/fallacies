import * as React from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import './ModalInfo.css';
import { IoCloseOutline } from "react-icons/io5";

const ModalInfo = ({ isVisible, toggle }) => {
    return (
        <Rodal visible={isVisible} leaveAnimation='door' onClose={toggle} showCloseButton={false}>
        <div className='ModalInfo'>
            <div className='ModalInfo__titleContainer'>
                <div>
                    <button aria-label='بستن' className="ModalInfo__closeIconButton" onClick={toggle}>
                        <IoCloseOutline size="3rem" />
                    </button>
                </div>
                <h1>درباره اپلیکیشن</h1>
                <div />
            </div>
            <p>با سلام! این برنامه را با توجه به توضیحات، مثال‌ها و سؤالات کتاب شایسته «مغالطات» دکتر علی اصغر خندان طراحی کردم. علاوه بر استفاده از مطالب خود کتاب و تغییر در برخی از آن‌ها بحسب صلاحدید، بعضی مثال‌ها و سؤالات را نیز به محتوا افزودم. توصیه می‌کنم برای توضیحات تفصیلی و شناخت راه‌های مقابله با برخی مغالطات، به کتاب اصلی مراجعه نمایید. امیدوارم که این مجموعه مورد رضایت امام زمان -عجل الله تعالی فرجه الشریف- قرار بگیرد.</p>
            <p>این برنامه به صورت PWA (<a rel="noreferrer" href='https://github.com/Sadegh-Zr/fallacies' target='_blank'>و اوپن سورس</a>) توسعه داده شده است؛ بنابراین می‌توانید به راحتی آن را نصب کرده و به شکل آفلاین از آن استفاده کنید.</p>
            <p>برای نظرات، پیشنهادات و انتقادات، می‌توانید از طریق <a rel="noreferrer" href='mailto:sadegh.zarinmehr@gmail.com' target='_blank'>ایمیل</a> يا <a rel="noreferrer" href='https://eitaa.com/sadegh_zr' target='_blank'>پیامبرسان ایتا</a> با من در ارتباط باشید.</p>
            <button aria-label='بسیار خب!' className='ModalInfo__close' onClick={toggle}>بسیار خب!</button>
        </div>
    </Rodal>
    )
};

export default ModalInfo;
