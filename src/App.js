import { Profile } from "./components/Profile/Profile.jsx";
import { Statistics } from "./components/Statistics/Statistics.jsx";

import profile from "./data/profile.json";
import statistics from "./data/statistics.json";

function App() {
  return (
    <>
      <Profile profile={profile} />
      <Statistics title="Upload stats" statistics={statistics} />
      <Statistics statistics={statistics} />
    </>
  );
}
export default App;
