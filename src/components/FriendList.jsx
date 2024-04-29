import friendData from './FriendList.json';

export default function FriendList() {
    return (
    <div className="containerF">
      {friendData.map(friends => {
        const classNameForFriendStatus = ['friendStatus'];
        if (friends.isOnline === true) {
          classNameForFriendStatus.push('online');
        }
        if (friends.isOnline === false) {
          classNameForFriendStatus.push('offline');
        }
        return (
          <div key={friends.id} className="friendWrapper">
            <img
              src={friends.avatar}
              alt={friends.name}
              className="friendAvatar"
            />
            <p className="friendName">{friends.name}</p>
            <p className={classNameForFriendStatus.join(" ")}>
              {friends.isOnline ? 'Online' : 'Offline'}
            </p>
          </div>
        );
      })}
        </div>
    );
}
