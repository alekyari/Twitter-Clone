import { useEffect,useState } from "react";
import "./index.css";


const MessageItem = ({ messageData,  setModalFixVisibility}) => {
  const {body, userId } = messageData;

  const [userData, setUserData]=useState({})

  useEffect(()=>{fetch(`https://dummyjson.com/users/${userId}`).then(res=>res.json()).then(data=>setUserData(data))},[])
  
  const onHandleClick = () => {
    setModalFixVisibility(true);
  };

  return (
    <div className="MessageItem">
      <img className="MessageItem__photo" src={userData.image} alt={userData.username} />
      <div className="MessageItem__content">
        <span>{userData.username}</span>
        <span> <img className="verified_img" src="https://img.icons8.com/ios-filled/256/verified-account.png" alt="verified account"  />{userData.email}</span>
        <p>{body}</p>
        <div className="MessageItem__content--icons">
          <img
            src="https://img.icons8.com/external-those-icons-lineal-those-icons/256/external-Chat-Bubble-messages-and-chat-those-icons-lineal-those-icons-10.png"
            alt="chat"
          />
          <img onClick={onHandleClick}
            src="https://img.icons8.com/material-sharp/256/sorting-arrows-horizontal.png"
            alt="arrow"
          />
          <img
            src="https://img.icons8.com/ios-glyphs/256/hearts.png"
            alt="heart"
          />
          <img src="https://img.icons8.com/ios/256/upload.png" alt="upload" />
        </div>
      </div>
        
    </div>
  );
};
export default MessageItem;
