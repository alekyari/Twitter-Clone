import { useState } from "react";
import Header from "../header";
import MessageList from "../messageList";
import "./index.css";

const Content = () => {
  const [headerInputValue, setHeaderInputValue] = useState("");
  return (
    <div className="Content">
      <Header setHeaderInputValue={setHeaderInputValue}/>
      <MessageList headerInputValue={headerInputValue} />
    </div>
  );
};

export default Content;
