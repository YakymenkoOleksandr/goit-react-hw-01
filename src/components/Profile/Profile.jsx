import userData from './userData.json';
import styles from './Profile.module.css';
export default function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.imageProfileAndInfo}>
        <img
          className={styles.profileImg}
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <p className={styles.nameOfUser}>{userData.username}</p>
        <p className={styles.linkOfUser}>@{userData.tag}</p>
        <p className={styles.locationOFUser}>{userData.location}</p>
      </div>

      <ul className={styles.tableFollowersViewsLikes}>
        <li className={styles.wrapper}>
          <span className={styles.socialActivity}>Followers</span>
          <span className={styles.numbers}>{userData.stats.followers}</span>
        </li>
        <li className={styles.wrapper} {...styles.center}>
          <span className={styles.socialActivity}>Views</span>
          <span className={styles.numbers}>{userData.stats.views}</span>
        </li>
        <li className={styles.wrapper}>
          <span className={styles.socialActivity}>Likes</span>
          <span className={styles.numbers}>{userData.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
