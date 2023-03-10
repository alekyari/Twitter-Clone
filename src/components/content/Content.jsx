import { useState } from "react";
import Header from "../header";
import MessageList from "../messageList";
import "./index.css";

const Content = ({setModalFixVisibility, setModalVisibility}) => {
  const [headerInputValue, setHeaderInputValue] = useState("");
  return (
    <div className="Content">
      <Header setHeaderInputValue={setHeaderInputValue} setModalVisibility={setModalVisibility}/>
      <MessageList headerInputValue={headerInputValue} setModalFixVisibility={setModalFixVisibility} />
    </div>
  );
};

export default Content;
