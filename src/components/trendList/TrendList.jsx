import TrendItem from "../trendItem";
import arrayTrends from "../../mock/arrayTrends";
import "./index.css";

const TrendList = ({inputValue}) => {
  const filteredTrendList = () =>
  // console.log( arrayTrends.map((msg) => msg.trend));
  arrayTrends.filter((msg) => msg.trend.includes(inputValue));



const stamp = () => {console.log(`la stampa è ${inputValue}`)};
// filteredTrendList();
  stamp()


  return (
    <div className="trend_list">
      {filteredTrendList().map((item, index) => (
        <TrendItem data={item} key={index} />
      ))}
    </div>
  );
};

export default TrendList;


