import React from "react";

const SpecialButton = (props) => {
  
  return (
    <div className='special-button' onClick={() => props.handleSpecialButton(props)}>
      { props.symbol }
    </div>
  );
};

export default SpecialButton;