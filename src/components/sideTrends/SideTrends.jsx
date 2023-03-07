import TrendList from "../trendList";
import {BiSearch} from 'react-icons/bi';
import { FiMenu } from "react-icons/fi";
import "./index.css";

const SideTrends = () => {
  return (
    <div className="SideTrends">
      <input type="text" className="search_twitter"  placeholder="Search Twitter"/>
      <div className="list">
        <h2>Trends for you</h2>
      <TrendList />
      </div>
      <div className="follow_suggestions">
        <h2>Who to follow</h2>
      </div>
     <div className="terms">
     <ul>
      <li><a href="https://www.google.com/">Terms of Service</a></li>
      <li><a href="https://www.google.com/">Privacy Policy</a></li>
      <li><a href="https://www.google.com/">Cookie Policy</a></li>
      <li><a href="https://www.google.com/">Accessibility</a></li>
      <li><a href="https://www.google.com/">Ads Info</a></li>
      <li><a href="https://www.google.com/">More...</a></li>
      <li><p>© 2023 Twitter, Inc.</p></li>
     </ul>
     </div>
     <div className="messages">
      <div><h2>Messages</h2></div>
      <div></div>
     </div>
    </div>
  );
};

export default SideTrends;
