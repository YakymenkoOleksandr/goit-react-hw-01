import styles from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem.jsx';
export default function FriendList(props) {
  return (
    <div className={styles.containerF}>
      {props.friends.map(friend => (
        <FriendListItem
          key={friend.id}
          friend={friend}
        />
      ))}
    </div>
  );
}

