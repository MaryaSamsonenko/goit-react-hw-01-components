import PropTypes from "prop-types";
import { Profile } from "../Profile/Profile.js";
import { StatisticsList } from "../Statistics/StatisticsList.js";
import { Friendslist } from "../Friends/Friendslist";
import { TransactionHistory } from "../TransactionHistory/TransactionHistory";
import { GlobalStyle } from "../../constants/Global.styled";
import profile from "../data/profile.json";
import statistics from "../data/statistics.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

function App() {
  return (
    <>
      <GlobalStyle />
      <Profile
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats}
      />
      <StatisticsList title="Upload stats" statistics={statistics} />
      <StatisticsList statistics={statistics} />
      <Friendslist friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}
export default App;
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
