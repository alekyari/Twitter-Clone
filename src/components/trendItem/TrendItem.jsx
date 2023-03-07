import "./index.css";

const TrendItem = ({ data }) => {
  return (
    <div className="trend_item">
      <div className="text">
      <p>{data.trend_country}</p>
      <h3>{data.trend}</h3>
      <p>{data.tweet_num}</p>
      </div>
    <div className="bullets"><p>...</p></div>
    </div>
  );
};

export default TrendItem;