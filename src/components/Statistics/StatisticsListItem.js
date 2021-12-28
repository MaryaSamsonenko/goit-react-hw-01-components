import PropTypes from "prop-types";
export const StatisticsListItem = ({ statistics }) => {
  return statistics.map(({ id, label, percentage }) => (
    <li className="item" key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  ));
};
StatisticsListItem.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
