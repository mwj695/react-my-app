import { useEffect, useState } from "react";

function App() {
  const [count,setCount]=useState(0)
  useEffect(()=>{
    document.title=`clicked ${count} times`
  })
  return (
    <div className="App">
      <p>clicked {count} times</p>
      <button onClick={()=>setCount(count+1)}>click here</button>
    </div>
  );
}

export default App;
