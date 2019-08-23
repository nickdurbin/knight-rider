import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "../OperatorButtons/OperatorButton";

const Operators = (props) => {

  const [setOperators] = useState(operators)

  return (
    <div className='operators-container'>
       {setOperators.map((operator, index) => {
          return <OperatorButton key={ index } symbol={ operator.char } value={ operator.value } {...props}/>
       })}
    </div>
  );
};

export default Operators;
