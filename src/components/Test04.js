import { useState } from "react"

export default function Test04(){
  const [count,setCount] = useState(0);
  // function play(){}
  return (
  <div>
    <h1>count:{count}</h1>
    <p>
      <button 
        type="button"
        // onClick= {play}
        onClick={() =>setCount(count + 1)}
        >
        click
      </button>
    </p>
  </div>
  )
}
// 12 - 22