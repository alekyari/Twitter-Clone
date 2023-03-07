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
    <p>X Following Y Followers</p>
  </div>
  <div className="hamRight">
    <p>x</p>
    <p>+</p>
  </div>

  </div>
 {/* <div className="main">
      <ul>
      <li>
        <img
          src="https://img.icons8.com/color/256/twitter--v1.png"
          alt="twitter logo"
        />
      </li>
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
  <h2>Creator Studio</h2> <h2>v</h2>
 </div>
 <div className="professional_tools"> 
 <h2>Professional Tools</h2> <h2>v</h2>
 </div> */}
    </div>
  );
};

export default HamburgerMenu;
