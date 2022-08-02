import Button from "./components/Button/Button";
import { faGear } from "@fortawesome/free-solid-svg-icons";

function App() {
  const testFunc = (e) => {
    console.log("test");
  };

  const text = "Button";

  const value = "secondary";

  return (
    <div>
      <Button text={text} type={value} isDisabled={true} icon={faGear} clickHandler={testFunc} />
    </div>
  );
}

export default App;
