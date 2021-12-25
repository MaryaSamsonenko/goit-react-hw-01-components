import PropTypes from "prop-types";
import { StatisticsItem } from "./StatisticsItem.jsx";
export const Statistics = ({ title, statistics }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        <StatisticsItem statistics={statistics} />
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.array.isRequired,
};
