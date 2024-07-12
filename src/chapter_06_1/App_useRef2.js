import React, { useEffect, useRef }  from "react";

function App() {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  },[]);

  const login = () => {
    alert(`안녕하세요 ${inputRef.current.value}`);
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username"></input>
      <button onClick = {login}>로그인</button>
    </div>
  );
}

export default App;