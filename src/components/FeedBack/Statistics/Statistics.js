import style from './Statistics.module.css';
import PropTypes from 'prop-types';
export default function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <ul className={style.list__statistic}>
      <li className={style.list__statistic__el}>
        <span>Good : </span>
        <span className={style.span__statistic}>{good}</span>
      </li>
      <li className={style.list__statistic__el}>
        <span>Neutral : </span>
        <span className={style.span__statistic}>{neutral}</span>
      </li>
      <li className={style.list__statistic__el}>
        <span>Bad : </span>
        <span className={style.span__statistic}>{bad}</span>
      </li>
      <li className={style.list__statistic__el}>
        <span>Total : </span>
        <span className={style.span__statistic}>{total}</span>
      </li>
      <li className={style.list__statistic__el}>
        <span>Positive statistic : </span>
        <span className={style.span__statistic}>{percentage}%</span>
      </li>
    </ul>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
