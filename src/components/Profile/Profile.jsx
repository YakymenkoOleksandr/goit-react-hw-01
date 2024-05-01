import styles from './Profile.module.css';
export default function Profile(props) {
  return (
    <div className={styles.container}>
      <div className={styles.imageProfileAndInfo}>
        <img
          className={styles.profileImg}
          src={props.image}
          alt="User avatar"
        />
        <p className={styles.nameOfUser}>{props.name}</p>
        <p className={styles.linkOfUser}>@{props.tag}</p>
        <p className={styles.locationOFUser}>{props.location}</p>
      </div>

      <ul className={styles.tableFollowersViewsLikes}>
        <li className={styles.wrapper}>
          <span className={styles.socialActivity}>Followers</span>
          <span className={styles.numbers}>{props.stats.followers}</span>
        </li>
        <li className={`${styles.wrapper} ${styles.center}`}>
          <span className={styles.socialActivity}>Views</span>
          <span className={styles.numbers}>{props.stats.views}</span>
        </li>
        <li className={styles.wrapper}>
          <span className={styles.socialActivity}>Likes</span>
          <span className={styles.numbers}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
