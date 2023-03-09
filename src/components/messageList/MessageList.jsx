import { useEffect, useState } from "react";

import MessageItem from "../messageItem";
import "./index.css";

const MessageList = ({ headerInputValue }) => {
const [post, setpost]=useState([]);

useEffect(()=> {
  fetch('https://dummyjson.com/posts')
.then((res)=> res.json())
.then(data=>setpost(data.posts))
},[])




const filteredMessageList = () =>
post.filter((msg) => msg.body.includes(headerInputValue));

  return (
    <div className="MessageList">
      <div className="white_space"></div>
      {filteredMessageList().map((message) => (
        <MessageItem messageData={message} key={message.id} />
      ))}
   
    </div>
  );
};

export default MessageList;
