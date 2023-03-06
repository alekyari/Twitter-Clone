import SideMenu from "./components/sideMenu";
import Content from "./components/content";
// import SideTrends from "./components/sideTrends";
import './App.css'

function App() {
 

  return (
    <div className="App">
 
   
      <Content />
      {/* <SideTrends /> */}
      <SideMenu />
    </div>
  )
}

export default App;
