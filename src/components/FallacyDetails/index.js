import * as React from 'react';
import { IoCloseOutline } from "react-icons/io5";
import './FallacyDetails.css';
import { toFarsiNumber, parseHTML } from '../../utils';
import graph1 from '../../images/graph1.png';
import graph2 from '../../images/graph2.png';
import graph3 from '../../images/graph3.jpg';
import graph4 from '../../images/graph4.jpg';
import ImageViewer from '../ImageViewer';

const GRAPH_FALLACIES_IMAGES = [
  {
    id: 13,
    images: [graph1, graph2]
  },
  {
    id: 14,
    images: [graph3, graph4]
  }
];

const FallacyDetails = ({ selectedFallacy, setSelectedFallacy, onButtonCopyClick }) => {
    const fallacyDetailsWrapper = React.useRef(null);
    const fallacyDetails = React.useRef(null);
    const [activeImageSrc, updateActiveImageSrc] = React.useState('');
    
    const renderFallacyImages = () => {
      const fallacyWithImage = GRAPH_FALLACIES_IMAGES.find(({ id }) => selectedFallacy?.id === id);
      if (fallacyWithImage) return (
        <div className='FallacyDetails__graphContainer'>
          <img src={fallacyWithImage.images[0]} onClick={() => { updateActiveImageSrc(fallacyWithImage.images[0]); }} />
          <img src={fallacyWithImage.images[1]} onClick={() => { updateActiveImageSrc(fallacyWithImage.images[1]); }} />
        </div>
      );
    };

    React.useEffect(() => {
        if (!selectedFallacy) return;
        fallacyDetailsWrapper.current.style.visibility = 'visible';
        fallacyDetailsWrapper.current.classList.remove('-hidden')
      }, [selectedFallacy]);

    React.useEffect(() => {
        const handleFallacyDetailsTransitionEnd = () => {
            const isClosed = fallacyDetailsWrapper.current.classList.contains('-hidden');
            if (!isClosed) return;
            fallacyDetailsWrapper.current.style.visibility = 'hidden';
            setSelectedFallacy(null);
          }
        fallacyDetails.current.addEventListener('transitionend', handleFallacyDetailsTransitionEnd);
        return () => {
            fallacyDetails.current?.removeEventListener('transitionend', handleFallacyDetailsTransitionEnd);
        }
    }, []);
    
    const hideFallacyDetails = () => {
      fallacyDetailsWrapper.current.classList.add('-hidden');
    }
    return (
        <div ref={fallacyDetailsWrapper} style={{ visibility: 'hidden' }} className="FallacyDetails__wrapper -hidden">
            <div onClick={hideFallacyDetails} className="FallacyDetails__contentFader" />
            <div ref={fallacyDetails} className="FallacyDetails">
              <button onClick={hideFallacyDetails} className="FallacyDetails__buttonClose">
                  <IoCloseOutline size="3rem" />
              </button>
              <h2 className="FallacyDetails__title">{`مغالطه ${selectedFallacy?.title}`}</h2>
              <p className="FallacyDetails__description"><span style={{ color: 'var(--color-primary)'}}>توضیح:‌ </span>{selectedFallacy?.description}</p>
              <div className='FallacyDetails__examplesContainer'>
                {selectedFallacy?.examples?.map((example, index) => (
                    <div key={example.id} className="FallacyDetails__example">
                      <span>{`مثال ${toFarsiNumber(index + 1)}: `}<span className="FallacyDetails__exampleValue">{parseHTML(example.value)}</span></span>
                    </div>
                ))}
              </div>
              {/* Specific Content for "مغالطه آماری: نمودارهای  گمراه‌کننده" and "مغالطه آماری: تصاویر یک بعدی" */}
              {renderFallacyImages()
              }
              <button onClick={onButtonCopyClick} className="FallacyDetails__buttonCopyMessage">کسی از این مغالطه استفاده می‌کند؟!</button>
            </div>
            <ImageViewer src={activeImageSrc} onClose={() => updateActiveImageSrc(null)} />
        </div>
    );
}

export default FallacyDetails;
