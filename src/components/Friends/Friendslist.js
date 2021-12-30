import PropTypes from "prop-types";
import { FriendsListItem } from "./FriendsListItem";
import { Section } from "../../common/Section.styled";

export const Friendslist = ({ friends }) => {
  return (
    <Section>
      <ul className="friendsList">
        {friends.map((friend) => (
          <FriendsListItem key={friend.id} friend={friend} />
        ))}
      </ul>
    </Section>
  );
};
Friendslist.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
