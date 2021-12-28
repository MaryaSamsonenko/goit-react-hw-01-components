import PropTypes from "prop-types";
export const FriendsListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <li className="item" key={id}>
      {isOnline ? (
        <span className="status">Online</span>
      ) : (
        <span className="status">Offline</span>
      )}

      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
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
