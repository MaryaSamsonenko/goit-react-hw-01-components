import { Profile } from "./Profile/Profile.js";
import { StatisticsList } from "./Statistics/StatisticsList.js";
import { Friendslist } from "./Friends/Friendslist";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import profile from "./data/profile.json";
import statistics from "./data/statistics.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

function App() {
  return (
    <>
      <Profile profile={profile} />
      <StatisticsList title="Upload stats" statistics={statistics} />
      <StatisticsList statistics={statistics} />
      <Friendslist friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}
export default App;
