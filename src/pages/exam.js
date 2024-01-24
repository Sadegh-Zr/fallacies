import * as React from 'react';
import './exam.css';

const Exam = () => {
    return (
        <main className='Exam'>
            <div className='Exam__titlesContainer'>
                <h1 className='Exam__title'>سؤال ۱ از  ۲۰</h1>
                <h2 className='Exam__title'>عبارت زیر، بر چه نوع مغالطه‌ای دلالت دارد؟</h2>
            </div>
            <div className='Exam__questionList'>
                <div className='Exam__questionItem'>
                    <h1 className='Exam__questionText'>هر انسان عاقلی می‌تواند تشخیص دهد که با سیاست فعلی‌ای که شرکت در پیش گرفته است، هرگز نمی‌توان میزان سود سالیانه را به میزان ۵۰ درصد افزایش داد و از حمایت مدیران بلندپایه بهره‌مند شد. شما باید رویه خود را تغییر دهید.</h1>
                    <div className='Exam__questionAnswerWrapper'>
                        <div className='Exam__questionAnswerList'>
                            <button className='Exam__questionAnswer'>اشتراک لفظ</button>
                            <button className='Exam__questionAnswer'>هر بچه مدرسه‌ای می‌داند</button>
                            <button className='Exam__questionAnswer'>خلط بین مقام ثبوت و اثبات</button>
                            <button className='Exam__questionAnswer'>پهلوان پنبه</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Exam;
