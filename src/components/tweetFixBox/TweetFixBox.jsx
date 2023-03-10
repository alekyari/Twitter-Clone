import { useState } from 'react'
import "./index.css";

const TweetFixBox = ({setModalFixVisibility}) => {
  const [titleInput, setTitleInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [idPost, setIdPost] = useState("");
  const [innerModalFixVisibility, setInnerModalFixVisibility] = useState(false);


  const onHandleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://dummyjson.com/posts/${idPost}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titleInput,
       body: messageInput,
      }),
    }).then(res => res.json())
    .then(data => alert(`il tuo titolo è stato cambiato in: "${(data.title)}" e il tuo messaggio è stato cambiato in: "${(data.body)}"`));
    
    setInnerModalFixVisibility(true);
    setModalFixVisibility(innerModalFixVisibility);
  };

  const onHandleClick = () => {
    setInnerModalFixVisibility(true);
    setModalFixVisibility(innerModalFixVisibility);
  };



  return (
    <div className='fixbox'>
      <div className="whatsappen">
      <button id='close_modal'  onClick={onHandleClick} >x</button>
        <div className="text"> 
        <form  onSubmit={onHandleSubmit}>
          <p>Fix your message here!</p>
        <input type="number" placeholder="Message id"value={idPost}
        onChange={(e) =>setIdPost(e.target.value)} required />
        <input type="text" placeholder="New Title" value={titleInput}
        onChange={(e) =>setTitleInput(e.target.value)} required />
        <input type="text" placeholder="New Message" value={messageInput}
        onChange={(e) =>setMessageInput(e.target.value)} required />
        <input id='Fix_message' type="submit" value="Fix it!" className="btn_filter"/>
        </form>
        </div>
      </div>
    </div>
  );
};

export default TweetFixBox;
