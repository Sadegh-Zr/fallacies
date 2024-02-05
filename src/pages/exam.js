import * as React from 'react';
import './exam.css';
import questionsJSON from '../../content/questions.json';
import { getAllSiblings, getRandomItemsFromArray, isBrowser, parseHTML, shuffle, toFarsiNumber } from '../utils';
import { QUESTION_DELAY } from '../constants';
import ModalResults from '../components/ModalResults';
import graph5 from '../images/graph5.png'
import graph6 from '../images/graph6.png'
import ImageViewer from '../components/ImageViewer';

const GRAPH_QUESTION_IMAGES = [
    {
      id: 36,
      image: graph5,
    },
    {
      id: 37,
      image: graph6,
    }
  ];

const QUESTIONS = questionsJSON.list.map(question => {
    // first item in each question choices data is the correct answer. So we shuffle the choices array
    // the correct choice is an object but the others are strings
    const choicesRandomized = shuffle(question.choices.map((choice, index) => ({ title: choice.title || choice, isCorrect: index === 0 })));
    
    return { ...question, choices: choicesRandomized, fallacyId: question.choices[0].fallacyId };
});

const Exam = () => {
    const [iterator, updateIterator] = React.useState(0);
    const searchParams = new URLSearchParams(isBrowser ? window.location.search : '');
    const EXAM_QUESTIONS = React.useRef(getRandomItemsFromArray(QUESTIONS, searchParams.get('n') || 10));
    const [isResultsModalVisible, setResultsModalVisibility] = React.useState(false);
    const [activeImageSrc, updateActiveImageSrc] = React.useState(null);
    
    React.useEffect(() => {
        if (isResultsModalVisible) {
            const previousList = JSON.parse(localStorage.getItem('remindingFallacies')) || [];
            const remindingFallacies = EXAM_QUESTIONS.current.filter(_q => _q.hasError).map(_q => _q.fallacyId);
            localStorage.setItem('remindingFallacies', JSON.stringify([...previousList, ...remindingFallacies]));
        }
    }, [isResultsModalVisible]);

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
                <button aria-label={choice.title} key={choice.title} onClick={(e) => { handleClick(e, choice)}} className='Exam__questionAnswer'>{choice.title}</button>
            )
        });

        /* Only for 2 specific questions */
        const renderQuestionImage = () => {
            const questionWithImage = GRAPH_QUESTION_IMAGES.find(({ id }) => item.id === id);
            if (questionWithImage) return (
                <img src={questionWithImage.image} onClick={() => { updateActiveImageSrc(questionWithImage.image); }} />
            );
          };

        const activeClassApply = index === iterator ? '-active' : '';
        const slideClassApply = ((iterator - 1) === index) ? '-slideAway' : '';
        return (
            <div key={item.id} className={`Exam__questionItem ${activeClassApply} ${slideClassApply}`}>
                <div className='Exam__questionText'>
                    <h1>{parseHTML(item.question)}</h1>
                    {renderQuestionImage()}
                </div>
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
            <ImageViewer src={activeImageSrc} onClose={() => { updateActiveImageSrc(null); }}/>
        </main>
    )
};

export default Exam;

export const Head = () => (
    <>
        <html translate="no" lang="fa" dir='rtl' />
        <title>مغالطات | آزمون</title>
        <meta name="theme-color" content="#fbc531" />
        <meta name="google" content="notranslate" />
        <meta name="description" content="آزمون‌گیری از مغالطات"/>
    </>
  )
  