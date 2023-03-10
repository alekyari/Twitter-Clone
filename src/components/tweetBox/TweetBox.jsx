import { useState } from 'react'
import { MdOutlineGifBox, MdSchedule } from 'react-icons/md'
import { CgPoll } from 'react-icons/cg'
import { FiSmile, FiImage } from 'react-icons/fi'
import { BiMap } from 'react-icons/bi'
import "./index.css";

const TweetBox = ({setModalVisibility}) => {
  const [messageInput, setMessageInput] = useState("");
  const [innerModalVisibility, setInnerModalVisibility] = useState(false);


  const onHandleSubmit = (e) => {
    e.preventDefault();
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Title",
        body: messageInput,
        userId: "1",
      })
      
      // .then(res => res.json())
      // .then(data => alert(`il tuo post: "${(data.body)}" è stato aggiunto con successo`))
    });
    setInnerModalVisibility(true);
    setModalVisibility(innerModalVisibility);
  };

  const onHandleClick = () => {
    setInnerModalVisibility(true);
    setModalVisibility(innerModalVisibility);
  };



  return (
    <div >
      <div className="whatsappen">
      <button id='close_modal'  onClick={onHandleClick} >x</button>
        <div className="text"> 
        <img
          className="profile_img" 
          src="https://img.icons8.com/arcade/256/guest-male.png"
          alt="profile"
        /> 
        <form  onSubmit={onHandleSubmit}>
        <input type="text" placeholder="What's happening?" value={messageInput}
        onChange={(e) =>setMessageInput(e.target.value)}
   
        required />
        <input id='tweet_input' type="submit" value="Tweet" className="btn_filter"/>
        </form>
        </div>
        <div className="icons">
          <ul>
          <li>< FiImage /></li>
          <li>< MdOutlineGifBox /></li>
          <li>< CgPoll /></li>
          <li>< FiSmile /></li>
          <li>< MdSchedule /></li>
          <li>< BiMap /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TweetBox;
