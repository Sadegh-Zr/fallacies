import * as React from 'react';
import './ImageViewer.css';
import { IoCloseOutline } from "react-icons/io5";

import { updateBrowserColor } from '../../utils';

const ImageViewer = ({ src, onClose }) => {
    React.useEffect(() => {
        if(src) updateBrowserColor('#000');
    }, [src])
    if (!src) return;
    const handleClick = () => {
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
        updateBrowserColor(primaryColor);
        onClose();
    }
    return (
        <div className="ImageViewer">
            <button aria-label='بستن' onClick={handleClick}>
                <IoCloseOutline size="3rem" color='#fff' />
            </button>
            <img src={src} />
        </div>
    )
};

export default ImageViewer;
