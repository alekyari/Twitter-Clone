import "./index.css";

const HamburgerMenu = ({ showMenu }) => {
  return (
    <div className={`hamburger ${showMenu ? "show" : ""}`}>

  <div className="account_info">
  <div className="hamLeft">
    <h2>Account info</h2>
    <img
          className="profile_img" 
          src="https://img.icons8.com/arcade/256/guest-male.png"
          alt="profile"
        />
    <h3>username</h3>
    <p>@username</p>
    <div className="follower_count">
      <div className="follower_count_left"> <h3>X</h3><p>Following</p></div>
    <div className="follower_count_right"><h3>Y</h3> <p>Followers</p></div>

    </div>
  </div>
  <div className="hamRight">
    <h1>x</h1>
    <div className="plus_button"><h1>+</h1></div>
  </div>

  </div>
 <div className="main">
      <ul>
      <li>
        <img
          src="https://img.icons8.com/pulsar-line/256/home-page.png"
          alt="home"
        />
        <p>Home</p>
      </li>
      <li>
        <img
          src="https://img.icons8.com/material-rounded/256/hashtag-large.png"
          alt="explore"
        />
        <p>Explore</p>
      </li>
      <li>
        <img
          src="https://img.icons8.com/material/256/jingle-bell.png"
          alt="notifications"
        />
        <p>Notifications</p>
      </li>
      <li>
        <img
          src="https://img.icons8.com/ios-glyphs/256/filled-chat.png"
          alt="messages"
        />
        <p>Messages</p>
      </li>
      <li>
        <img
          src="https://img.icons8.com/material/256/bookmark-outline.png"
          alt="bookmarks"
        />
        <p>Bookmarks</p>
      </li>
    </ul>
 </div>
 <div className="creator_studio">
  <h3>Creator Studio</h3> <h3>v</h3>
 </div>
 <div className="professional_tools"> 
 <h3>Professional Tools</h3> <h3>v</h3>
 </div>
    </div>
  );
};

export default HamburgerMenu;
