import React from "react";

const NumberButton = ({ name, symbol, setDisplay, display}) => {
  const buttonValue = `number-button ${ name }`;

  const handleClick = () => {
    return setDisplay(display + symbol);
  }

  return (
    <div className={ buttonValue } onClick={() => handleClick()}>
      { symbol }
    </div>
  );
};

export default NumberButton;