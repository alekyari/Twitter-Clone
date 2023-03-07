import "./index.css";
import { useState } from "react";
import HamburgerMenu from "../hamburgerMenu";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const hamburgerTrigger = () => {
    setShowMenu(!showMenu);}

  return (
    <div className="Header">
      <div className="top_container_mobile">
        <div className="first_col"><img
          className="profile_img" onClick={hamburgerTrigger}
          src="https://img.icons8.com/arcade/256/guest-male.png"
          alt="profile"
        />
          </div><div className="second_col"><img
          className="twitter_img"
          src="https://img.icons8.com/color/256/twitter--v1.png"
          alt="twitter logo"
        />
          </div><div className="third_col">
          </div>
          <HamburgerMenu showMenu={showMenu} />
      </div>
      <div className="top_container_desk">
        <h3>Home</h3>
      </div>
      <div className="bottom_container">
        <div className="left">
          <h3>
            For you
          </h3>
        </div>
        <div className="right">
          <h3>
            Following
          </h3>
        </div>      
      </div>
      <div className="more_tweet">
          <h3>Show More Tweets</h3>
        </div>
    </div>
  );
};

export default Header;
