import styles from './FriendList.module.css';
export default function FriendList(props) {
  return (
    <div className={styles.containerF}>
      {props.friends.map(friends => {
        const classNameForFriendStatus = [styles.friendStatus];
        if (friends.isOnline === true) {
          classNameForFriendStatus.push(styles.online);
        }
        if (friends.isOnline === false) {
          classNameForFriendStatus.push(styles.offline);
        }
        return (
          <div key={friends.id} className={styles.friendWrapper}>
            <img
              src={friends.avatar}
              alt={friends.name}
              className={styles.friendAvatar}
            />
            <p className={styles.friendName}>{friends.name}</p>
            <p className={classNameForFriendStatus.join(' ')}>
              {friends.isOnline ? 'Online' : 'Offline'}
            </p>
          </div>
        );
      })}
    </div>
  );
}
