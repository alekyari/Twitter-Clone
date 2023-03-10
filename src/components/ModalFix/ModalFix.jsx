import "./index.css";
import TweetFixBox from "../tweetFixBox";

const ModalFix = ({setModalFixVisibility}) => {
  const onHandleClick = () => {
    setModalFixVisibility(false);
   
  };
  return (
    <div className="Modal">
      <div className="Modal__overlay"   onClick={onHandleClick}></div>
      <div className="Modal__content">
       <TweetFixBox setModalFixVisibility={setModalFixVisibility}/>
      </div>
    </div>
  );
};

export default ModalFix;
