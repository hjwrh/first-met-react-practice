import React  from "react";
import { useInput } from "../useInput";

const inputCallBack = (message) => {
  alert(message);
}

function App() {

  const [inputValue,handleChange,handleSubmit, handleCallBack] = useInput('', inputCallBack);
  const [inputValue2,handleChange2,handleSubmit2, handleCallBack2] = useInput('', inputCallBack);

  return (
    <div>
        <h1>useInput</h1>
        <input value={inputValue} onChange={handleChange}></input>
        <button onClick={handleSubmit}>확인</button>
        <button onClick={handleCallBack}>콜백확인</button>
        <h1>useInput2</h1>
        <input value={inputValue2} onChange={handleChange2}></input>
        <button onClick={handleSubmit2}>확인2</button>
        <button onClick={handleCallBack2}>콜백확인2</button>
    </div>
  );
}

export default App;