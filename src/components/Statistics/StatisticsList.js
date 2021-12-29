import PropTypes from "prop-types";
import { StatisticsListItem } from "./StatisticsListItem";
import { Section } from "../../common/Section.styled";
export const StatisticsList = ({ title, statistics }) => {
  return (
    <Section>
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        <StatisticsListItem statistics={statistics} />
      </ul>
    </Section>
  );
};
StatisticsList.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.array.isRequired,
};
