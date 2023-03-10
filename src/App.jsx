import { useState } from "react";
import SideMenu from "./components/sideMenu";
import Content from "./components/content";
import SideTrends from "./components/sideTrends"
import Modal from "./components/Modal";
import ModalFix from "./components/ModalFix";
import './App.css'


function App() {
  const [isModalVisibile, setModalVisibility] = useState(false);
  const [isModalFixVisibile, setModalFixVisibility] = useState(false);


  return (
    <div className="App">
      <SideMenu setModalVisibility={setModalVisibility}/>
      <Content setModalFixVisibility={setModalFixVisibility} setModalVisibility={setModalVisibility}/>
      <SideTrends />
      {isModalVisibile && <Modal setModalVisibility={setModalVisibility} />} 
      {isModalFixVisibile && <ModalFix setModalFixVisibility={setModalFixVisibility} />}


    </div>
  )
}

export default App;
