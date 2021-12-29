import PropTypes from "prop-types";
import {
  StatsListItem,
  StatsLabel,
  StatsLabelValue,
} from "./StatisticsListItem.styled";
export const StatisticsListItem = ({ statistics }) => {
  return statistics.map(({ id, label, percentage }) => (
    <StatsListItem key={id}>
      <StatsLabel>{label}</StatsLabel>
      <StatsLabelValue>{percentage}%</StatsLabelValue>
    </StatsListItem>
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
