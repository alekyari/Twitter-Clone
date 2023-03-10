import "./index.css";
import TweetBox from "../tweetBox";

const Modal = ({setModalVisibility}) => {
  const onHandleClick = () => {
    setModalVisibility(false);
   
  };
  return (
    <div className="Modal">
      <div className="Modal__overlay"   onClick={onHandleClick}></div>
      <div className="Modal__content">

  
     <TweetBox setModalVisibility={setModalVisibility}/>  
   
      </div>
    </div>
  );
};

export default Modal;
