import PropTypes from "prop-types";
import {
  FriendsItemStyle,
  Online,
  Offline,
  Avatar,
  UserName,
} from "./FriendListItem.styled";
export const FriendsListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <FriendsItemStyle key={id}>
      {isOnline ? <Online /> : <Offline />}

      <Avatar src={avatar} alt="User avatar" width="60px" />
      <UserName>{name}</UserName>
    </FriendsItemStyle>
  ));
};
FriendsListItem.prototypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
