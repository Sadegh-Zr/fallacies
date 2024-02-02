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
      const data = fallaciesJSON.data.filter(({ title }) => title.includes(searchValue));
      if (!data.length) {
        return (
          <div className="FallaciesList__notFound">
            <RiMenuSearchLine size="5rem" />
            <p>مغالطه‌ای با این نام یافت نشد...</p>
          </div>
        )
      };
      return data.map(fallacy => (
        <button onClick={() => { handleClick(fallacy) }} key={fallacy.id}>{remindingFallacies.includes(fallacy.id) && <span />} {`مغالطه ${fallacy.title}`}</button>
      ))
    };
    return (
        <div className="FallaciesList">
            {renderFallacies()}
        </div>
    );
};

export default FallaciesList;
