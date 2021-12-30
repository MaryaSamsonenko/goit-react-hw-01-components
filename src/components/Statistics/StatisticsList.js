import PropTypes from "prop-types";
import { Section } from "../../common/Section.styled";
import {
  StatsList,
  StatsTitle,
  StatsListItem,
  StatsLabel,
  StatsLabelValue,
} from "./StatisticsList.styled";
export const StatisticsList = ({ title, statistics }) => {
  return (
    <Section>
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatsList className="stat-list">
        {statistics.map(({ id, label, percentage }) => (
          <StatsListItem key={id}>
            <StatsLabel>{label}</StatsLabel>
            <StatsLabelValue>{percentage}%</StatsLabelValue>
          </StatsListItem>
        ))}
      </StatsList>
    </Section>
  );
};
StatisticsList.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
