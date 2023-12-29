import * as React from "react";

import './index.css';
import Header from "../components/Header";
import FallaciesList from "../components/FallaciesList";
import FallacyDetails from "../components/FallacyDetails";

const IndexPage = () => {
  const [searchValue, updateSearchValue] = React.useState('');
  const [selectedFallacy, setSelectedFallacy] = React.useState(null);
  const copyModal = React.useRef(null);
  const copyModalText = React.useRef(null);

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

  React.useEffect(() => {
    const handleCopyModalTransitionEnd = () => {
      if (copyModal.current.classList.contains('-closed')) {
        copyModal.current.style.visibility = 'hidden';
        copyModalText.current.classList.remove('-scaleOut');
        copyModalText.current.classList.remove('-scaleIn');
      }
    }

    copyModal.current.addEventListener('transitionend', handleCopyModalTransitionEnd);
    return () => {
      copyModal.current.removeEventListener('transitionend', handleCopyModalTransitionEnd);
    }
  }, []);
  return (
    <main>
      <Header searchValue={searchValue} updateSearchValue={updateSearchValue} />
      <FallaciesList searchValue={searchValue} setSelectedFallacy={setSelectedFallacy} />
      <div className="scrollFaderBottom"/>
      <FallacyDetails selectedFallacy={selectedFallacy} setSelectedFallacy={setSelectedFallacy} showCopyModal={showCopyModal} />
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
