import * as React from 'react';
import './exam.css';
import questionsJSON from '../../content/questions.json';
import { getAllSiblings, getRandomItemsFromArray, isBrowser, parseHTML, shuffle, toFarsiNumber } from '../utils';
import { QUESTION_DELAY } from '../constants';
import ModalResults from '../components/ModalResults';



const QUESTIONS = questionsJSON.list.map(question => {
    // first item in each question choices data is the correct answer. So we shuffle the choices array
    // the correct choice is an object but the others are strings
    const choicesRandomized = shuffle(question.choices.map((choice, index) => ({ title: choice.title || choice, isCorrect: index === 0 })));
    
    return { ...question, choices: choicesRandomized, fallacyId: question.choices[0].fallacyId };
});

const Exam = () => {
    const [iterator, updateIterator] = React.useState(0);
    const searchParams = new URLSearchParams(isBrowser ? window.location.search : '');
    const EXAM_QUESTIONS = React.useRef(getRandomItemsFromArray(QUESTIONS, searchParams.get('n')));
    const [isResultsModalVisible, setResultsModalVisibility] = React.useState(false);

    
    React.useEffect(() => {
        if (isResultsModalVisible) {
            console.log(EXAM_QUESTIONS.current)
        }
    }, [isResultsModalVisible])

    const renderQuestions = () => EXAM_QUESTIONS.current.map((item, index) => {
        const handleClick = (e, choice) => {
            const selectedButton = e.currentTarget;
            if (choice.isCorrect) {
                selectedButton.classList.add('-correct');
                getAllSiblings(selectedButton).forEach(sibling => { sibling.disabled = true })
            } else {
                const correctChoice = item.choices.find(choice => choice.isCorrect);
                const correctChoiceButton = getAllSiblings(selectedButton).find(button => button.innerText === correctChoice.title);
                correctChoiceButton.classList.add('-correct');
                selectedButton.classList.add('-incorrect');
                EXAM_QUESTIONS.current = EXAM_QUESTIONS.current.map(_q => _q.id === item.id ? ({ ..._q, hasError: true }) : _q);
                getAllSiblings(correctChoiceButton).forEach(sibling => sibling.disabled = true);
            }
            setTimeout(() => {
                if (iterator + 1 === EXAM_QUESTIONS.current.length) setResultsModalVisibility(true);
                else updateIterator(iterator + 1);
            }, QUESTION_DELAY);
        }

        const renderChoices = () => item.choices.map(choice => {
            return (
                <button key={choice.title} onClick={(e) => { handleClick(e, choice)}} className='Exam__questionAnswer'>{choice.title}</button>
            )
        });

        const activeClassApply = index === iterator ? '-active' : '';
        const slideClassApply = ((iterator - 1) === index) ? '-slideAway' : '';
        return (
            <div key={item.id} className={`Exam__questionItem ${activeClassApply} ${slideClassApply}`}>
                <h1 className='Exam__questionText'>{parseHTML(item.question)}</h1>
                <div className='Exam__questionAnswerList'>
                    {renderChoices()}
                </div>
            </div>
        )
    });
    return (
        <main className='Exam'>
            <div className='Exam__titlesContainer'>
                <h1 className='Exam__title'>سؤال {toFarsiNumber(iterator + 1)} از  {toFarsiNumber(EXAM_QUESTIONS.current.length)}</h1>
                <h2 className='Exam__title'>عبارت زیر، بر چه نوع مغالطه‌ای دلالت دارد؟</h2>
            </div>
            <div className='Exam__questionList'>
                {renderQuestions()}
            </div>
            {isResultsModalVisible && (
                <ModalResults questions={EXAM_QUESTIONS.current} />
            )}
        </main>
    )
};

export default Exam;

export const Head = () => (
    <>
      <title>مغالطات | آزمون</title>
      <meta name="theme-color" content="#fbc531" />
    </>
  )
  