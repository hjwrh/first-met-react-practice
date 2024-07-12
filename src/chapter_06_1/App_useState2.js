import { useState } from "react";

  const heavyWork = () => {
    console.log('엄청무거운 작업');
    return ['홍길동', '김민수'];
  }

 function App() {

  const [names, setNames] = useState(heavyWork);
  const [input,setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
    console.log ("[State변경] input 값이 변경됨")
  }

  const handleUpload = () => {
    setNames((prevNames) => {
      return [input,...prevNames];
    });
    console.log ("[State변경] names 값이 변경됨")
  }

  return (
    <div>
      <input type="text"  value={input} onChange={handleInputChange}/>
      {console.log("렌더링=======>" + names)}
      <button onClick={handleUpload}>upload</button>
      {
        names.map( (name, index) => {
          return <p key={index}>{name}</p>
        }

        )
      }
    </div>

  );
}

export default App;