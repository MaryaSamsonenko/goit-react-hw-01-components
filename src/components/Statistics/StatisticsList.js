import PropTypes from "prop-types";
import { StatisticsListItem } from "./StatisticsListItem";
import { Section } from "../../common/Section.styled";
import { StatsList, StatsTitle } from "./StatisticsList.styled";
export const StatisticsList = ({ title, statistics }) => {
  return (
    <Section>
      {title && <StatsTitle>{title}</StatsTitle>}

      <StatsList className="stat-list">
        <StatisticsListItem statistics={statistics} />
      </StatsList>
    </Section>
  );
};
StatisticsList.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.array.isRequired,
};
