import "./index.css";
import { BiHomeCircle, BiSearch, BiBell, BiBookmark} from 'react-icons/bi';
import {HiOutlineMail} from 'react-icons/hi'
import {CgProfile} from 'react-icons/cg'
import {CiCircleMore} from 'react-icons/ci' 
import {FaTwitter} from 'react-icons/fa'
import {GiFeather} from 'react-icons/gi'
const SideMenu = () => {
  return (<div className="menu">
        <div className="mobileMenu">
      <ul>
        <li>
       < BiHomeCircle />
        </li>
        <li>
          < BiSearch />
        </li>
        <li>
       < BiBell />
        </li>
        <li>
         <HiOutlineMail />
        </li>
      </ul>
      <div className="new_tweet"><img src="https://img.icons8.com/laces/256/lightweight.png" alt="new tweet" /></div>
    </div>
    <div className="deskMenu">
      <ul>
      <li>
      < FaTwitter />
      </li>
      <li>
      < BiHomeCircle />
        <p>Home</p>
      </li>
      <li>
      < BiSearch />
        <p>Explore</p>
      </li>
      <li>
      < BiBell />
        <p>Notifications</p>
      </li>
      <li>
      <HiOutlineMail />
        <p>Messages</p>
      </li>
      <li>
      <BiBookmark />
        <p>Bookmarks</p>
      </li>
      <li>
      <CgProfile />
        <p>Profile</p>
        </li>
        <li>
      <CiCircleMore />
        <p>More</p>
        </li>

        <li>
      <div className="tablet_tweet"><span>+</span><GiFeather className="feather"/></div>
        </li>

        <li>
      <div className="tweet"><h4>Tweet</h4></div>
        </li>
        
    </ul>
    <div className="user_log">
      
    <img
          className="profile_img"
          src="https://img.icons8.com/arcade/256/guest-male.png"
          alt="profile"
        />

<div className="text_container">
<div><p>username</p><p style={{color: "grey"}}>@username</p></div>
      <span>...</span>
      </div>
      
    </div>
    </div>
  </div>


  );
};

export default SideMenu;
