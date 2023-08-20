import PropTypes from 'prop-types';
import { FriendItem, StatusSpan } from './FriendList.styled';

export const FriendListItem = ({ item: { avatar, name, isOnline } }) => {
  return (
    <FriendItem>
      <StatusSpan isOnline={isOnline}></StatusSpan>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
