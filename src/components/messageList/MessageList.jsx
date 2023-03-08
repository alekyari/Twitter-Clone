import { useEffect, useState } from "react";
import MessageItem from "../messageItem";
import "./index.css";

const MessageList = () => {
const [post, setpost]=useState([]);

useEffect(()=> {
  fetch('https://dummyjson.com/posts')
.then((res)=> res.json())
.then(data=>setpost(data.posts))
},[])


  return (
    <div className="MessageList">
      <div className="white_space"></div>
      {post.map((message) => (
        <MessageItem messageData={message} key={message.id} />
      ))}
   
    </div>
  );
};

export default MessageList;
