import styles from './FriendListItem.module.css'
export default function FriendListItem(props) {
  const { friend } = props;
  const classNameForFriendStatus = [styles.friendStatus];
  if (friend.isOnline === true) {
    classNameForFriendStatus.push(styles.online);
  }
  if (friend.isOnline === false) {
    classNameForFriendStatus.push(styles.offline);
  }
  return (
    <div key={friend.id} className={styles.friendWrapper}>
      <img
        src={friend.avatar}
        alt={friend.name}
        className={styles.friendAvatar}
      />
      <p className={styles.friendName}>{friend.name}</p>
      <p className={classNameForFriendStatus.join(' ')}>
        {friend.isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
