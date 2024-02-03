import * as React from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import './ModalInfo.css';
import { IoCloseOutline } from "react-icons/io5";

const ModalInfo = ({ isVisible, toggle }) => {
    return (
        <Rodal visible={isVisible} leaveAnimation='door' onClose={toggle} showCloseButton={false} customStyles={{ height: 'auto', position: 'relative'}} className='s'>
        <div className='ModalInfo'>
            <button className="ModalInfo__closeIconButton" onClick={toggle}>
                <IoCloseOutline size="3rem" />
            </button>
            <h1>درباره اپلیکیشن</h1>
            <p>با سلام! این برنامه را با توجه به کتاب «مغالطات» دکتر علی اصغر خندان طراحی نموده‌ام. در برخی موارد، در توضیحات و مثال‌ها تغییراتی که مناسب می‌دانستم اعمال کردم و برخی مثال‌ها و سؤالات را نیز به آن افزودم تا کار ارزشمند نویسنده، واضح‌تر باشد.</p>
            <p>این برنامه به صورت PWA توسعه داده شده است؛ بنابراین می‌توانید به راحتی آن را نصب کرده و به شکل آفلاین از آن استفاده کنید.</p>
            <p>برای نظرات، پیشنهادات و انتقادات، می‌توانید از طریق <a href='mailto:sadegh.zarinmehr@gmail.com' target='_blank'>ایمیل</a> و <a href='https://eitaa.com/sadegh_zr' target='_blank'>پیامبرسان ایتا</a> با من در ارتباط باشید.</p>
            <button className='ModalInfo__close' onClick={toggle}>بسیار خب!</button>
        </div>
    </Rodal>
    )
};

export default ModalInfo;
