import PropTypes from "prop-types";
import {
  FriendsItemStyle,
  Online,
  Offline,
  Avatar,
  UserName,
} from "./FriendListItem.styled";
export const FriendsListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <FriendsItemStyle>
        {isOnline ? <Online /> : <Offline />}

        <Avatar src={avatar} alt="User avatar" width="60px" />
        <UserName>{name}</UserName>
      </FriendsItemStyle>
    </>
  );
};
FriendsListItem.prototypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
