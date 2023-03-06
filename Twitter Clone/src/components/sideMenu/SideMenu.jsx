import "./index.css";

const SideMenu = () => {
  return (
    <div className="SideMenu">
      <ul>
        <li>
          <img
            src="https://img.icons8.com/pulsar-line/256/home-page.png"
            alt="home"
          />
        </li>
        <li>
          <img
            src="https://img.icons8.com/material-rounded/256/hashtag-large.png"
            alt="explore"
          />
        </li>
        <li>
          <img
            src="https://img.icons8.com/material/256/jingle-bell.png"
            alt="notifications"
          />
        </li>
        <li>
          <img
            src="https://img.icons8.com/ios-glyphs/256/filled-chat.png"
            alt="messages"
          />
        </li>
      </ul>
      <div className="new_tweet"><img src="https://img.icons8.com/laces/256/lightweight.png" alt="new tweet" /></div>
    </div>
  );
};

export default SideMenu;
