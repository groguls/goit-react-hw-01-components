import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendListContainer } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(friend => (
        <FriendListItem key={friend.id} item={friend} />
      ))}
    </FriendListContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape),
  id: PropTypes.string,
};
