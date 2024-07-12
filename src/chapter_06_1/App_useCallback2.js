  import React, {useState, useEffect, useCallback} from "react";


 function App() {

  const [number, setNumber] = useState(0);
  
  const someFunction = useCallback(() => {
    console.log(`someFunction: number: ${number}`);
    return;
  },[number]);
  
  useEffect (() => {
    console.log('someFunction이 변경되었습니다.');
  }, [someFunction]);

  return (
    <div>
      
      <input
        type = "number"
        value = {number}
        onChange={ (e) => setNumber(e.target.value)}  
      />
      <br />
      <button onClick={someFunction}>Call someFunction</button>
    </div>

  );
}

export default App;