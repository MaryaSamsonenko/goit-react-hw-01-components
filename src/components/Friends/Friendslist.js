import PropTypes from "prop-types";
import { FriendsListItem } from "./FriendsListItem";
export const Friendslist = ({ friends }) => {
  return (
    <section className="friends">
      <ul className="friend-list">
        <FriendsListItem friends={friends} />
      </ul>
    </section>
  );
};
Friendslist.propTypes = {
  friends: PropTypes.array.isRequired,
};
