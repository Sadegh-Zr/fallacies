import * as React from "react";
import fallaciesJSON from '../../content/fallacies.json';
import { IoCloseOutline } from "react-icons/io5";
import { RiMenuSearchLine } from "react-icons/ri";

import './index.css';
import Header from "../components/Header";

const IndexPage = () => {
  const [searchValue, updateSearchValue] = React.useState('');
  const [selectedFallacy, setSelectedFallacy] = React.useState(null);
  const fallacyDetailsWrapper = React.useRef(null);
  const fallacyDetails = React.useRef(null);
  const copyModal = React.useRef(null);
  const copyModalText = React.useRef(null);
  const renderFallacies = () => {
    const data = fallaciesJSON.data.filter(({ title }) => title.includes(searchValue));
    if (!data.length) {
      return (
        <div className="notFound">
          <RiMenuSearchLine size="5rem" />
          <p>مغالطه‌ای با این نام یافت نشد...</p>
        </div>
      )
    }
    return data.map(fallacy => (
      <button onClick={() => { setSelectedFallacy(fallacy); }} key={fallacy.id}>{`مغالطه ${fallacy.title}`}</button>
    ))
  };
  React.useEffect(() => {
    if (!selectedFallacy) return;
    fallacyDetailsWrapper.current.style.visibility = 'visible';
    fallacyDetailsWrapper.current.classList.remove('-hidden')
  }, [selectedFallacy]);

  const showCopyModal = () => {
    copyModal.current.style.visibility = 'visible';
    copyModal.current.classList.remove('-closed');
    copyModalText.current.classList.add('-scaleIn');
    navigator.clipboard.writeText(`با احترام، به نظر می‌رسد که کلام شما دچار مغالطه ${selectedFallacy.title} شده است.`)
    setTimeout(() => {
      copyModalText.current.classList.add('-scaleOut');
      setTimeout(() => {
        copyModal.current.classList.add('-closed');
      }, 150);
    }, 1000);
  };

  const hideFallacyDetails = () => {
    fallacyDetailsWrapper.current.classList.add('-hidden');
  }
  React.useEffect(() => {
    const handleFallacyDetailsTransitionEnd = () => {
      const isClosed = fallacyDetailsWrapper.current.classList.contains('-hidden');
      if (!isClosed) return;
      fallacyDetailsWrapper.current.style.visibility = 'hidden';
      setSelectedFallacy(null);
    }
    const handleCopyModalTransitionEnd = () => {
      if (copyModal.current.classList.contains('-closed')) {
        copyModal.current.style.visibility = 'hidden';
        copyModalText.current.classList.remove('-scaleOut');
        copyModalText.current.classList.remove('-scaleIn');
      }
    }

    copyModal.current.addEventListener('transitionend', handleCopyModalTransitionEnd);
    fallacyDetails.current.addEventListener('transitionend', handleFallacyDetailsTransitionEnd);
    return () => {
      fallacyDetails.current.removeEventListener('transitionend', handleFallacyDetailsTransitionEnd);
      copyModal.current.removeEventListener('transitionend', handleCopyModalTransitionEnd);
    }
  }, [])
  return (
    <main>
      <Header searchValue={searchValue} updateSearchValue={updateSearchValue} />
      <div className="fallaciesList">
        {renderFallacies()}
      </div>
      <div className="scrollFaderBottom"/>
      <div ref={fallacyDetailsWrapper} style={{ visibility: 'hidden' }} className="fallacyDetailsWrapper -hidden">
        <div onClick={hideFallacyDetails} className="contentFader" />
        <div ref={fallacyDetails} className="fallacyDetails">
          <button onClick={hideFallacyDetails} className="fallacyDetails__buttonClose">
            <IoCloseOutline size="3rem" />
          </button>
          <h2 className="fallacyDetails__title">{`مغالطه ${selectedFallacy?.title}`}</h2>
          <p className="fallacyDetails__description"><span style={{ color: 'var(--color-primary)'}}>توضیح:‌ </span>{selectedFallacy?.description}</p>
          {selectedFallacy?.examples?.map((example, index) => (
            <div key={example.id} className="fallacyDetails__example">
              <span>{`مثال ${index + 1}: `}<span className="fallacyDetails__exampleValue">{example.value}</span></span>
            </div>
          ))}
          <button onClick={showCopyModal} className="fallacyDetails__buttonCopyMessage">کسی از این مغالطه استفاده می‌کند؟!</button>
        </div>
      </div>
      <div style={{ visibility: 'hidden'}} ref={copyModal} className="copyModal -closed">
        <div ref={copyModalText} className="copyModal__textContainer">
          <p>متنی کپی شد !</p>
          <p>آن را برای شخص مغالط ارسال کنید :)</p>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>مغالطات</title>
