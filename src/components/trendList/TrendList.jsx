import TrendItem from "../trendItem";
import arrayTrends from "../../mock/arrayTrends";
import "./index.css";

const TrendList = () => {

  return (
    <div className="trend_list">
      {arrayTrends.map((item, index) => (
        <TrendItem data={item} key={index} />
      ))}
    </div>
  );
};

export default TrendList;


