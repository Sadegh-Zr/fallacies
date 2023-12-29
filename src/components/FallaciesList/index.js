import * as React from 'react';
import fallaciesJSON from '../../../content/fallacies.json';
import { RiMenuSearchLine } from "react-icons/ri";
import './FallaciesList.css';

const FallaciesList = ({ setSelectedFallacy, searchValue }) => {
    const renderFallacies = () => {
        const data = fallaciesJSON.data.filter(({ title }) => title.includes(searchValue));
        if (!data.length) {
          return (
            <div className="FallaciesList__notFound">
              <RiMenuSearchLine size="5rem" />
              <p>مغالطه‌ای با این نام یافت نشد...</p>
            </div>
          )
        }
        return data.map(fallacy => (
          <button onClick={() => { setSelectedFallacy(fallacy); }} key={fallacy.id}>{`مغالطه ${fallacy.title}`}</button>
        ))
      };
    return (
        <div className="FallaciesList">
            {renderFallacies()}
        </div>
    );
};

export default FallaciesList;
