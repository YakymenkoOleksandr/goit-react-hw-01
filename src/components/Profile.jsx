import userData from './userData.json';
export default function Profile() {
  return (
    <div className="container">
      <div className="imageProfileAndInfo">
        <img
          className="profileImg"
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <p className="nameOfUser">{userData.username}</p>
        <p className="linkOfUser">@{userData.tag}</p>
        <p className="locationOFUser">{userData.location}</p>
      </div>

      <ul className="tableFollowersViewsLikes">
        <li className="wrapper">
          <span className="socialActivity">Followers</span>
          <span className="numbers">{userData.stats.followers}</span>
        </li>
        <li className="wrapper center">
          <span className="socialActivity">Views</span>
          <span className="numbers">{userData.stats.views}</span>
        </li>
        <li className="wrapper">
          <span className="socialActivity">Likes</span>
          <span className="numbers">{userData.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
