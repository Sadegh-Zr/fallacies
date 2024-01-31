import * as React from 'react';
import './ModalCopy.css';

const ModalCopy = ({ isOpen, selectedFallacy, hideModal }) => {
    const container = React.useRef(null);
    const textContainer = React.useRef(null);
    React.useEffect(() => {
    if(isOpen) {
        container.current.style.visibility = 'visible';
        container.current.classList.remove('-closed');
        textContainer.current.classList.add('-scaleIn');
        navigator.clipboard.writeText(`با احترام، به نظر می‌رسد که کلام شما دچار مغالطه ${selectedFallacy.title} شده است.`)
        setTimeout(() => {
            textContainer.current.classList.add('-scaleOut');
            setTimeout(() => {
            container.current.classList.add('-closed');
            }, 150);
        }, 1000);
    };
    }, [isOpen]);

    React.useEffect(() => {
        const handleTransitionEnd = () => {
          if (container.current.classList.contains('-closed')) {
            container.current.style.visibility = 'hidden';
            textContainer.current.classList.remove('-scaleOut');
            textContainer.current.classList.remove('-scaleIn');
            hideModal();
          }
        }
    
        container.current.addEventListener('transitionend', handleTransitionEnd);
        return () => {
          container.current?.removeEventListener('transitionend', handleTransitionEnd);
        }
      }, []);
    return (
        <div style={{ visibility: 'hidden'}} ref={container} className="ModalCopy -closed">
            <div ref={textContainer} className="ModalCopy__textContainer">
            <p>متنی کپی شد !</p>
            <p>آن را برای شخص مغالط ارسال کنید :)</p>
            </div>
        </div>
    )
};

export default ModalCopy;
