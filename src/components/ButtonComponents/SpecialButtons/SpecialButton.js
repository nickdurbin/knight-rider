import React from "react";

const SpecialButton = ({ symbol, setDisplay, display }) => {
  
  function handleReset() {
    if (symbol === 'C') return setDisplay('');
  }

  function handlePercentage() {
    if (symbol === '%') return setDisplay(display / 100);
  }

  function handleAbsoluteValue() {
    if (symbol === '+/-') return setDisplay(display * -1);
  }
  
  return (
    <div className='special-button' onClick={() => handleReset() || handlePercentage() || handleAbsoluteValue()}>{ symbol }</div>
  );
};

export default SpecialButton;