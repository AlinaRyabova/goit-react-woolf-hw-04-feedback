import React from 'react';
import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={style.options}>
    {options.map(option => (
      <button
        className={style.options}
        type="button"
        data-feedback={option}
        onClick={() => onLeaveFeedback(option)}
        key={option}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
