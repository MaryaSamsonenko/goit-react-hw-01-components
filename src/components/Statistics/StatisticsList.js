import PropTypes from "prop-types";
import { StatisticsListItem } from "./StatisticsListItem";
export const StatisticsList = ({ title, statistics }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        <StatisticsListItem statistics={statistics} />
      </ul>
    </section>
  );
};
StatisticsList.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.array.isRequired,
};
