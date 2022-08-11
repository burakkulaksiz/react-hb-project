import Button from "./components/Button/Button";
import Tabs from "./components/Tabs/Tabs";
import { useState } from "react";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import "./App.scss";

function App() {
  // button
  const testFunc = (e) => {
    console.log("test");
  };

  const text = "Button";
  const value = "bordered";

  // tab
  const [activeTab, setActiveTab] = useState();

  return (
    <div>
      <div className="tab-container">
        <Tabs id={1} title={"Tab 1"} activeTab={activeTab} setActiveTab={setActiveTab} type={"fluid"} />
        <Tabs id={2} title={"Tab 2"} activeTab={activeTab} setActiveTab={setActiveTab} type={"fluid"} />
        <Tabs id={3} title={"Tab 3"} activeTab={activeTab} setActiveTab={setActiveTab} type={"fluid"} />
      </div>

      <br />
      <Button text={text} type={value} isDisabled={false} icon={faGear} clickHandler={testFunc} />
    </div>
  );
}

export default App;
