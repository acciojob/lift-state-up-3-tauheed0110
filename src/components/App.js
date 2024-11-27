
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const hadleSelectedOption = (option)=>{
    setSelectedOption(option)
  }
  return (
    <div className="parent">
        <h1>Parent Component</h1>
        <Child1 hadleSelectedOption={hadleSelectedOption}/>
        <Child2 hadleSelectedOption={hadleSelectedOption}/>
        <p>Selected Option: {selectedOption}</p>
    </div>
  )
}

export default App


const Child1 = ({hadleSelectedOption})=>{
  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={()=>{
        hadleSelectedOption("Option 1");
      }}>Option 1</button>
    </div>
  )
}
const Child2 = ({hadleSelectedOption})=>{
  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={()=>{
        hadleSelectedOption("Option 2");
      }}>Option 2</button>
    </div>
  )
}
