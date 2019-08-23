import React from "react";

const OperatorButton = (props) => {

  return (
    <div className="operator-button" value={props.value} onClick={() => props.handleOperator(props.symbol, props.value) || props.handleCalculation(props.value)}>
      { props.symbol }
    </div>
  );
};

export default OperatorButton;