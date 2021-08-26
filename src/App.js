import React,{useState} from "react";

function App() {
  const [count,setCount]=useState{0}
  return (
    <div className="App">
      123123
      <p>clicked {count} times</p>
      <button onclick={()=>setCount(count+1)}>click here</button>

    </div>
  );
}

export default App;
