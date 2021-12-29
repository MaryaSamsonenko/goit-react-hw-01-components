import PropTypes from "prop-types";
import { FriendsListItem } from "./FriendsListItem";
import { Section } from "../../common/Section.styled";

export const Friendslist = ({ friends }) => {
  return (
    <Section>
      <ul className="friendsList">
        <FriendsListItem friends={friends} />
      </ul>
    </Section>
  );
};
Friendslist.propTypes = {
  friends: PropTypes.array.isRequired,
};
