import React from "react";

const Display = ({ total }) => {
  return <div className="display">
  <div className='displayDigit'>{ total }</div>
  </div>;
};

export default Display;
