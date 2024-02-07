import * as React from 'react';
import fallaciesJSON from '../../../content/fallacies.json';
import { RiMenuSearchLine } from "react-icons/ri";
import './FallaciesList.css';
import { isBrowser } from '../../utils';

const FallaciesList = ({ setSelectedFallacy, searchValue }) => {

  const searchParams = new URLSearchParams(isBrowser ? window.location.search : '');
  const remindingFallaciesString = isBrowser ? localStorage.getItem('remindingFallacies') : '';
  const remindingFallacies = remindingFallaciesString ? JSON.parse(remindingFallaciesString) : [];

  React.useEffect(() => {
    const fallacyId = searchParams.get('fid');
    if (fallacyId) {
      setSelectedFallacy(fallaciesJSON.data.find(fallacy => fallacy.id === Number(fallacyId)));
    }
  }, []);

  const handleClick = fallacy => {
    const newList = remindingFallacies.filter(fallacyId => fallacyId !== fallacy.id)
    localStorage.setItem('remindingFallacies', JSON.stringify(newList));
    setSelectedFallacy(fallacy);
  }

  const renderFallacies = () => {
    const filteredData = fallaciesJSON.data.filter(({ title }) => title.includes(searchValue));
    const categorizedData = filteredData.reduce((previous, next) => {
      const isCategoryCreated = previous.some(previousItem => previousItem.title === next.category);
      if (!isCategoryCreated) return [...previous, { title: next.category, items: [next] }];
      const editedData = previous.map(previousItem => {
        if (previousItem.title === next.category) return {...previousItem, items: [...previousItem.items, next]};
        return previousItem;
      });
      return editedData;
    }, []);
    const finalData = searchValue ? categorizedData : categorizedData;
    
      if (!finalData.length) {
        return (
          <div className="FallaciesList__notFound">
            <RiMenuSearchLine size="5rem" />
            <p>مغالطه‌ای با این نام یافت نشد...</p>
          </div>
        )
      };
      
      return finalData.map(item => {
        return (
          <div key={item.title} className='FallaciesList__category'>
            <div className='FallaciesList__categoryTitleContainer'>
              <span/>
              <h1 className='FallaciesList__categoryTitle'>{item.title}</h1>
              <span />
            </div>
            <div className='FallaciesList__categoryList'>
              {item.items.map(buttonItem => (
                <button aria-label={`مغالطه ${buttonItem.title}`} onClick={() => { handleClick(buttonItem) }} key={buttonItem.id}>{remindingFallacies.includes(buttonItem.id) && <span className='FallaciesList__readMark' />} {`مغالطه ${buttonItem.title}`}</button>
              ))}
            </div>
          </div>
        )
      });
    };
    return (
        <div className="FallaciesList">
            {renderFallacies()}
        </div>
    );
};

export default FallaciesList;
