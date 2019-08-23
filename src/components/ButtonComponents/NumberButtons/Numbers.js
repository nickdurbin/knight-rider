import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "../NumberButtons/NumberButton";

const Numbers = ({ setDisplay, display }) => {

  const [setNumbers] = useState(numbers);

  return (
    <div className="numbers-container">
      { setNumbers.map((num, index) => { 
        return index !== 9 
        ?
        <NumberButton key={ index } symbol={ num } setDisplay={ setDisplay } display={ display } /> 
        : 
        <NumberButton key={ index } symbol={ num } name='zero-button' 
        setDisplay={ setDisplay } display={ display } /> 
      })}
    </div>
  );
};

export default Numbers;