import { Profile } from "./components/Profile/Profile.jsx";
import profile from "./data/profile.json";
function App() {
  return (
    <>
      <Profile profile={profile} />
    </>
  );
}

export default App;
