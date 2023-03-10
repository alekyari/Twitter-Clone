import TrendList from "../trendList";
import { useState } from "react";
import { useRef } from "react";
import {BiSearch} from 'react-icons/bi';
import { FiMenu } from "react-icons/fi";
import "./index.css";

const SideTrends = () => {
  const sideTrendsRef = useRef(null);
  const [inputValue, setInputValue] = useState("");


  

// Esercizio 09-03-2023 - useRef
// Ho usato l'Hook useRef per accedere alle proprietà del componente SideTrends, 
//nello specifico attraverso la funzione onScroll impongo che per quantità di scroll >= di 1
// la viewort di sposta di 60 px verso il basso, per scroll <=1 la viewport ritorna alla posizione iniziale.
  return (
    <div ref={sideTrendsRef} className="SideTrends"  
     onScroll={() =>
      sideTrendsRef.current.scrollTop >= 1
        ? (sideTrendsRef.current.style.transform = "translateY(-60px)")
        : (sideTrendsRef.current.style.transform = "translateY(0)")
    }
    >
      <input type="text" value={inputValue}
        onChange={(e) => {setInputValue(e.target.value);console.log(inputValue)}} className="search_twitter"  placeholder="Search Twitter"/>
      <div className="list">
        <h2>Trends for you</h2>
      <TrendList inputValue={inputValue}/>
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
