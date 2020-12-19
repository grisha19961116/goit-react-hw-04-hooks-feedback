import style from './FeedBack.module.css';
import React, { useState, useEffect } from 'react';
import Statistics from './Statistics/Statistics.js';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.js';
import Section from './Section/Section.js';
import Notification from './Notification/Notification.js';

function FeedBack() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPercentage(Math.ceil((100 / total) * good));
  }, [total, good]);

  const handleFeedback = ({ target }) => {
    const { name } = target;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        console.log('Sorry, we are not have ' + name + '.');
    }
  };

  return (
    <div className={style.wrapper}>
      <Section title="Please leave feedback" flag={true}>
        <FeedbackOptions onClick={even => handleFeedback(even)} />
      </Section>
      <Section title="Statistics" flag={false}>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={percentage}
          />
        ) : (
          <Notification />
        )}
      </Section>
    </div>
  );
}

export default FeedBack;
