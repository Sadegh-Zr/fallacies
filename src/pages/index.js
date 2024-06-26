import * as React from "react";

import './index.css';
import { Header, FallaciesList, FallacyDetails, ModalCopy, ModalExam, Seo } from "../components";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { FILTER_OPTIONS } from "../constants";


const IndexPage = () => {
  const [searchValue, updateSearchValue] = React.useState('');
  const [filterValue, updateFilterValue] = React.useState(FILTER_OPTIONS[0].value);
  const [selectedFallacy, setSelectedFallacy] = React.useState(null);
  const [isModalCopyVisible, setModalCopyVisibility] = React.useState(false);
  const [isModalExamVisible, setModalExamVisibility] = React.useState(false);
  const buttonTestElement = React.useRef(null);
  const loadingElement = React.useRef(null);

  React.useEffect(() => { loadingElement.current.style.display = 'none' }, [])
  
  const toggleModalExam = () => { setModalExamVisibility(!isModalExamVisible); };
  return (
    <main>
      <div ref={loadingElement} className='loadingWrapper'>
        <div className="loader" />
      </div>
      <Header filterValue={filterValue} updateFilterValue={updateFilterValue} searchValue={searchValue} updateSearchValue={updateSearchValue} />
      <FallaciesList filterValue={filterValue} searchValue={searchValue} setSelectedFallacy={setSelectedFallacy} />
      <div className="scrollFaderBottom"/>
      <FallacyDetails selectedFallacy={selectedFallacy} setSelectedFallacy={setSelectedFallacy} onButtonCopyClick={() => { setModalCopyVisibility(true); }} />
      <ModalCopy isOpen={isModalCopyVisible} selectedFallacy={selectedFallacy} hideModal={() => { setModalCopyVisibility(false); }} />
      <button ref={buttonTestElement} aria-label="آزمون" onClick={toggleModalExam} className="buttonTest">
        <HiOutlineNewspaper size="2.5rem" color="#fff" />
      </button>
      <ModalExam isVisible={isModalExamVisible} toggle={toggleModalExam} />
    </main>
  )
}

export default IndexPage;

export const Head = () => <Seo title="مغالطات" description="مرجعی برای رشد تفکر منطقی به وسیله معرفی و توضیح مغالطات به همراه مثال‌های مختلف و آزمون" />;
