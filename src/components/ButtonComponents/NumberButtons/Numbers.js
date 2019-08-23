import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "../NumberButtons/NumberButton";

const Numbers = () => {

  const [setNumbers] = useState(numbers);

  return (
    <div className="numbers-container">
      { setNumbers.map((num, index) => { 
        return index !== 9 
        ?
        <NumberButton key={ index } symbol={ num } /> 
        : 
        <NumberButton key={ index } symbol={ num } name='zero-button' /> 
      })}
    </div>
  );
};

export default Numbers;