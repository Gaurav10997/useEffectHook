import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      console.log("radhika");
    }, 1000);
    console.log(timer);
    return () => {
      console.log("return" + timer);
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <div className="App">
      <h1 onClick={() => setCount((prev) => prev - 1)}>-</h1>
      {count}
      <h1 onClick={() => setCount((prev) => prev + 1)}>+</h1>
    </div>
  );
}
