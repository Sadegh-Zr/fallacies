import * as React from "react";

import './index.css';
import { Header, FallaciesList, FallacyDetails, ModalCopy, ModalExam } from "../components";
import { HiOutlineNewspaper } from "react-icons/hi2";


const IndexPage = () => {
  const [searchValue, updateSearchValue] = React.useState('');
  const [selectedFallacy, setSelectedFallacy] = React.useState(null);
  const [isModalCopyVisible, setModalCopyVisibility] = React.useState(false);
  const [isModalExamVisible, setModalExamVisibility] = React.useState(false);
  
  const toggleModalExam = () => { setModalExamVisibility(!isModalExamVisible); };
  return (
    <main>
      <Header searchValue={searchValue} updateSearchValue={updateSearchValue} />
      <FallaciesList searchValue={searchValue} setSelectedFallacy={setSelectedFallacy} />
      <div className="scrollFaderBottom"/>
      <FallacyDetails selectedFallacy={selectedFallacy} setSelectedFallacy={setSelectedFallacy} onButtonCopyClick={() => { setModalCopyVisibility(true); }} />
      <ModalCopy isOpen={isModalCopyVisible} selectedFallacy={selectedFallacy} hideModal={() => { setModalCopyVisibility(false); }} />
      <button aria-label="آزمون" onClick={toggleModalExam} className="buttonTest">
        <HiOutlineNewspaper size="2.5rem" color="#fff" />
      </button>
      <ModalExam isVisible={isModalExamVisible} toggle={toggleModalExam} />
    </main>
  )
}

export default IndexPage;

export const Head = () => (
  <>
    <html lang="fa" dir='rtl' />
    <title>مغالطات</title>
    <meta name="theme-color" content="#fbc531" />
    <meta name="description" content="مرجعی برای تسلط به مغالطات به همراه مثال‌های کاربردی و آزمون‌گیری" />
  </>
)
