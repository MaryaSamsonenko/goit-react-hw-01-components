import PropTypes from "prop-types";
export const StatisticsItem = ({ statistics }) => {
  return statistics.map((item) => (
    <li className="item" key={item.id}>
      <span className="label">{item.label}</span>
      <span className="percentage">{item.percentage}%</span>
    </li>
  ));
};
StatisticsItem.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
