import TrendItem from "../trendItem";
import arrayTrends from "../../mock/arrayTrends";
import "./index.css";

const TrendList = ({search}) => {
  const filteredTrendList = () =>
  // console.log( arrayTrends.map((msg) => msg.trend));
  arrayTrends.filter((msg) => msg.trend.includes({search}?{search}: ""));

filteredTrendList();
  
  return (
    <div className="trend_list">
      {filteredTrendList().map((item, index) => (
        <TrendItem data={item} key={index} />
      ))}
    </div>
  );
};

export default TrendList;


