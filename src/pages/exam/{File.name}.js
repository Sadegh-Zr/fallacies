import * as React from 'react';
import './exam.css';
import questionsJSON from '../../../content/questions.json';
import { getAllSiblings, getRandomItemsFromArray, isBrowser, parseHTML, shuffle, toFarsiNumber } from '../../utils';
import { QUESTION_DELAY } from '../../constants';
import graph5 from '../../images/graph5.png'
import graph6 from '../../images/graph6.png'
import { ImageViewer, ModalResults, Seo } from '../../components';

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

const Exam = ({ params }) => {
    const [iterator, updateIterator] = React.useState(0);
    const EXAM_QUESTIONS = React.useRef(getRandomItemsFromArray(QUESTIONS, Number(params.name)));
    const [isResultsModalVisible, setResultsModalVisibility] = React.useState(false);
    const [activeImageSrc, updateActiveImageSrc] = React.useState(null);
    
    React.useEffect(() => {
        if (isResultsModalVisible) {
            const previousList = JSON.parse(localStorage.getItem('remindingFallacies')) || [];
            const remindingFallacies = EXAM_QUESTIONS.current.filter(_q => _q.hasError).map(_q => _q.fallacyId);
            localStorage.setItem('remindingFallacies', JSON.stringify([...previousList, ...remindingFallacies]));
        }
    }, [isResultsModalVisible]);

    /* Only for 2 specific questions */
    const renderQuestionImage = item => {
        const questionWithImage = GRAPH_QUESTION_IMAGES.find(({ id }) => item.id === id);
        if (questionWithImage) return (
            <img alt="تصویر سؤال" src={questionWithImage.image} onClick={() => { updateActiveImageSrc(questionWithImage.image); }} />
        );
    };

    const handleChoiceClick = (e, choice, item) => {
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

    const renderEachQuestionChoices = item => item.choices.map(choice => {
        return (
            <button aria-label={choice.title} key={choice.title} onClick={(e) => { handleChoiceClick(e, choice, item)}} className='Exam__questionAnswer'>{choice.title}</button>
        )
    });

    const renderQuestions = () => EXAM_QUESTIONS.current.map((item, index) => {
        const activeClassApply = index === iterator ? '-active' : '';
        const slideClassApply = ((iterator - 1) === index) ? '-slideAway' : '';
        return (
            <div key={item.id} className={`Exam__questionItem ${activeClassApply} ${slideClassApply}`}>
                <div className='Exam__questionText'>
                    <h1>{parseHTML(item.question)}</h1>
                    {renderQuestionImage(item)}
                </div>
                <div className='Exam__questionAnswerList'>
                    {renderEachQuestionChoices(item)}
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
            <ImageViewer alt="تصویر سؤال" src={activeImageSrc} onClose={() => { updateActiveImageSrc(null); }} />
        </main>
    )
};

export default Exam;

export const Head = () => <Seo title="مغالطات | آزمون" description="آزمون چهار گزینه‌ای از مغالطات" />
