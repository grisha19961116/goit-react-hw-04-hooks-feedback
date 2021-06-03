import style from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
export default function FeedbackOptions({ handleFeedback }) {
  return (
    <div className={style.wrapper__btn}>
      <button
        className={style.btn}
        type="button"
        name="good"
        onClick={handleFeedback}
      >
        Good
      </button>
      <button
        className={style.btn}
        type="button"
        name="neutral"
        onClick={handleFeedback}
      >
        Neutral
      </button>
      <button
        className={style.btn}
        type="button"
        name="bad"
        onClick={handleFeedback}
      >
        Bad
      </button>
    </div>
  );
}
FeedbackOptions.propTypes = {
  handleFeedback: PropTypes.func.isRequired,
};
