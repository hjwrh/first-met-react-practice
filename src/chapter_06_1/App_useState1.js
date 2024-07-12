import { useState } from "react";

 function App() {
  const [time, setTime] = useState(1);

  const handleClick = () => {
    setTime(time + 1);
  };

  console.log("업데이트!!");

  return (
    <div>
      <span>현재시각: {time}시</span>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;